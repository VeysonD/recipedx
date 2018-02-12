interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'vOVPX5dyYWbFmCkGb2ALyvt3O7xyyNUy',
  CLIENT_DOMAIN: 'fdash4.auth0.com',
  AUDIENCE: 'https://fdash4.auth0.com/userinfo',
  REDIRECT: 'http://localhost:4200/callback',
  SCOPE: 'openid profile email'
}
