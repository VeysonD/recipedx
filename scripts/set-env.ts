import { writeFile } from 'fs';
import { argv } from 'yargs';

require('dotenv').config();

// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object

const environment = argv.environment;
const isProd = environment === 'prod';

const targetPath = `./src/environments/environments.${environment}.ts`;
const envConfigFile = `
  export const environment = {
    production: ${isProd},
    superSecretKey: "${process.env.TODO}",
    superDuperSecret: "${process.env.TODO}"
  };
`

writeFile(targetPath, envConfigFile, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Output generated at ${targetPath}`);
});
