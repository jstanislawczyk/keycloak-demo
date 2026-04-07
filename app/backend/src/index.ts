import express from 'express';
import cors from 'cors';
import { authenticate } from './keycloak.middleware.js';

const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;

app.get('/', authenticate, (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
