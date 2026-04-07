import type Keycloak from 'keycloak-js';

export interface KeycloakContextProps {
  keycloak: Keycloak | null;
  isAuthenticated: boolean;
}

export interface KeycloakProviderProps {
  children: React.ReactNode;
}
