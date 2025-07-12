import { execSync, ExecSyncOptions } from "child_process";
import * as rimraf from "rimraf";

const runCommands = true;

const projectName = "the-project";
const applicationName = "the-application";
const libraryName = "the-library";

const version = process.argv[2];
const majorVersion = version.split(".")[0];
const minorVersion = version.split(".").slice(0, 2).join(".");
const flags = new Set(process.argv.slice(3));
const branch = version + Array.from(flags).sort().join("");

run(`git checkout -b ${branch}`, {});
rimraf.sync(projectName);
runAndCommit(`npm install --save-dev @angular/cli@${version}`, {});
runAndCommit(
  `npx ng new ${projectName} --create-application=${!flags.has(
    "-noApp"
  )} --routing=${flags.has(
    "-route"
  )} --skip-install --interactive=false --style=scss`,
  {}
);
if (flags.has("-eslint")) {
  runAndCommit(
    `npx ng add angular-eslint --interactive=false --skip-confirmation=true`
  );
  runAndCommit(
    `npx ng config "schematics.angular-eslint:application.setParserOptionsProject" true`
  );
  runAndCommit(
    `npx ng config "schematics.angular-eslint:library.setParserOptionsProject" true`
  );
}
if (flags.has("-subApp")) {
  runAndCommit(
    `npx ng generate application ${applicationName} --routing=${flags.has(
      "-route"
    )} --skip-install --interactive=false`
  );
}
if (flags.has("-lib")) {
  runAndCommit(
    `npx ng generate library ${libraryName} --skip-install --interactive=false`
  );
}
if (flags.has("-mat")) {
  const extraArgs = flags.has("-noApp") ? ` --project=${applicationName}` : "";
  runAndCommit(
    `npx ng add @angular/material@${minorVersion} --theme=custom --typography${extraArgs} --interactive=false --skip-confirmation=true`
  );
}
if (flags.has("-pwa")) {
  runAndCommit(
    "npx ng add @angular/pwa --interactive=false --skip-confirmation=true"
  );
}
if (flags.has("-worker")) {
  runAndCommit(`npx ng generate web-worker app`);
}
if (flags.has("-fire")) {
  // steps from https://firebase.google.com/docs/hosting/quickstart
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  console.error(
    "firebase hosting must be added manually. Run this and commit:"
  );
  console.log("cd the-project");
  console.log("firebase init hosting");
  console.log("git add .");
  console.log("cd ..");
  console.log(`git commit -m "add firebase hosting"`);
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
} else {
  rimraf.sync(`${projectName}/node_modules`);
}

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
