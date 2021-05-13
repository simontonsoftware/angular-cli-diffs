import { execSync, ExecSyncOptions } from "child_process";
import * as rimraf from "rimraf";

const runCommands = true;

const projectName = "the-project";
const applicationName = "the-application";
const libraryName = "the-library";

const version = process.argv[2];
const flags = new Set(process.argv.slice(3));
const branch = version + Array.from(flags).sort().join("");

run(`git checkout -b ${branch}`, {});
rimraf.sync(projectName);
runAndCommit(`yarn add -D @angular/cli@${version}`, {});
runAndCommit(
  `npx ng new ${projectName} --createApplication=${!flags.has(
    "-noApp"
  )} --routing=${flags.has("-route")} --strict=${flags.has(
    "-strict"
  )} --skip-install --interactive=false --packageManager=yarn --style=scss`,
  {}
);
if (flags.has("-eslint")) {
  runAndCommit(
    `npx ng add @angular-eslint/schematics --interactive=false --skip-confirmation=true`
  );
  runAndCommit(`ng config cli.defaultCollection @angular-eslint/schematics`);
}
if (flags.has("-subApp")) {
  runAndCommit(
    `npx ng generate application ${applicationName} --skip-install --interactive=false`
  );
}
if (flags.has("-lib")) {
  runAndCommit(
    `npx ng generate library ${libraryName} --skip-install --interactive=false`
  );
}
if (flags.has("-mat")) {
  runAndCommit(
    "npx ng add @angular/material --interactive=false --skip-confirmation=true"
  );
}
if (flags.has("-pwa")) {
  runAndCommit(
    "npx ng add @angular/pwa --interactive=false --skip-confirmation=true"
  );
}
if (flags.has("-fire")) {
  console.error("@angular/fire must be added manually. Run this and commit:");
  console.log("cd the-project && npx ng add @angular/fire");
}
rimraf.sync(`${projectName}/node_modules`);

function runAndCommit(
  command: string,
  options: ExecSyncOptions = { cwd: projectName }
) {
  run(command, options);
  if (runCommands) {
    execSync("git add .");
    execSync(`git commit -m "${command}"`);
  }
}

function run(command: string, options: ExecSyncOptions = { cwd: projectName }) {
  console.log("\n--------------------------------------------");
  console.log(command);

  if (runCommands) {
    execSync(command, options);
  }
}
