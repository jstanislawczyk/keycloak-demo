import { jwtVerify, createRemoteJWKSet } from 'jose';
import type { Request, Response, NextFunction } from 'express';

const realmURL = 'http://localhost:8080/realms/test_realm';
const JWKS = createRemoteJWKSet(
  new URL(`${realmURL}/protocol/openid-connect/certs`),
);

export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Missing token' });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    const { payload } = await jwtVerify(token, JWKS, {
      issuer: realmURL,
    });

    (req as any).user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}
