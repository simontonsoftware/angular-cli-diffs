import * as rimraf from 'rimraf';
import {execSync, ExecSyncOptions} from 'child_process';

if (process.argv.length !== 3) {
  console.log(process.argv);
  throw new Error("Pass a single argument: the version to generate");
}

const version = process.argv[2];
console.log('generating version', version);

const projectName = 'the-project';
const libraryName = 'the-library';

execSync(`git checkout -b ${version}`);

rimraf.sync(projectName);

runAndCommit(`yarn add -D @angular/cli@${version}`);
runAndCommit(`npx ng new ${projectName} --skip-install --no-interactive`);
runAndCommit(
  `npx ng generate library ${libraryName} --skip-install --no-interactive`,
  { cwd: projectName },
);

function runAndCommit(command: string, options?: ExecSyncOptions) {
  execSync(command, options);
  execSync('git add .');
  execSync(`git commit -m "${command}"`);
}
