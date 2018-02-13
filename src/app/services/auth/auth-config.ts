interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'fJG9oBQ4YdnxS4H8HM0NdF8eo7JEcJW2',
  CLIENT_DOMAIN: 'fdash4.auth0.com',
  AUDIENCE: 'http://localhost:4201',
  REDIRECT: 'http://localhost:4200/callback',
  SCOPE: 'openid profile email'
}
