import { environment } from './../../../environments/environment';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: environment.clientId,
  CLIENT_DOMAIN: environment.domain,
  AUDIENCE: environment.audience,
  REDIRECT: environment.authRedirect,
  SCOPE: 'openid profile email'
}
