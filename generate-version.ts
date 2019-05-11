import * as rimraf from 'rimraf';
import { execSync } from 'child_process';

if (process.argv.length !== 3) {
  console.log(process.argv);
  throw new Error("Pass a single argument: the version to generate");
}

const version = process.argv[2];
console.log('generating version', version);

const projectName = 'the-project';
const libraryName = 'the-library';

rimraf.sync(projectName);

execSync(`yarn add -D @angular/cli@${version}`);
execSync(`npx ng new ${projectName} --skip-install --no-interactive`);
execSync(
  `npx ng generate library ${libraryName} --skip-install --no-interactive`,
  { cwd: projectName },
);
