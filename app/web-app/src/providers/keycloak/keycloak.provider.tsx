import React, { createContext, useEffect, useState, useRef } from 'react';
import Keycloak from 'keycloak-js';
import type {
  KeycloakContextProps,
  KeycloakProviderProps,
} from './keycloak.provider.model';

const KeycloakContext = createContext<KeycloakContextProps | undefined>(
  undefined,
);

const KeycloakProvider: React.FC<KeycloakProviderProps> = ({ children }) => {
  const isInitialized = useRef<boolean>(false);
  const [keycloak, setKeycloak] = useState<Keycloak | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    if (isInitialized.current) {
      return;
    }

    isInitialized.current = true;

    const initKeycloak = async () => {
      const keycloakInstance: Keycloak = new Keycloak({
        url: import.meta.env.VITE_KEYCLOAK_URL as string,
        realm: import.meta.env.VITE_KEYCLOAK_REALM as string,
        clientId: import.meta.env.VITE_KEYCLOAK_CLIENT as string,
      });

      keycloakInstance
        .init({
          onLoad: 'check-sso',
        })
        .then((authenticated: boolean) => setIsAuthenticated(authenticated))
        .catch((error) => {
          console.error('Keycloak initialization failed:', error);
          setIsAuthenticated(false);
        })
        .finally(() => setKeycloak(keycloakInstance));
    };

    initKeycloak();
  }, []);

  return (
    <KeycloakContext.Provider value={{ keycloak, isAuthenticated }}>
      {children}
    </KeycloakContext.Provider>
  );
};

export { KeycloakProvider, KeycloakContext };
