import { writeFile } from 'fs';
import { argv } from 'yargs';

require('dotenv').config();

// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object

const environment = argv.environment;
const isProd = environment === 'prod';

const targetPath = `./src/environments/environment.${environment}.ts`;
const envConfigFile = `
  export const environment = {
    production: ${isProd},
    server: "${process.env.SERVER}",
    port: ${process.env.PORT},
    audience: "${process.env.AUDIENCE}",
    apiEndpoint: "${process.env.API_ENDPOINT}",
    clientId: "${process.env.CLIENT_ID}",
    domain: "${process.env.DOMAIN}",
    authRedirect: "${process.env.AUTH_REDIRECT}"
  };
`

writeFile(targetPath, envConfigFile, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Output generated at ${targetPath}`);
});
