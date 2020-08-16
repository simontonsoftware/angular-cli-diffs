import * as rimraf from "rimraf";
import { execSync, ExecSyncOptions } from "child_process";

const projectName = "the-project";
const applicationName = "the-application";
const libraryName = "the-library";

const version = process.argv[2];
const flags = new Set(process.argv.slice(3));
const branch = version + Array.from(flags).sort().join("");
console.log("generating", branch);

execSync(`git checkout -b ${branch}`);

rimraf.sync(projectName);

runAndCommit(`yarn add -D @angular/cli@${version}`);
runAndCommit(
  `npx ng new ${projectName}  --createApplication=${flags.has(
    "noApp"
  )} --routing=${flags.has("-route")} --strict=${flags.has(
    "-strict"
  )} --skip-install --no-interactive`
);
if (flags.has("-subApp")) {
  runAndCommit(
    `npx ng generate application ${applicationName} --skip-install --no-interactive`,
    { cwd: projectName }
  );
}
if (flags.has("-lib")) {
  runAndCommit(
    `npx ng generate library ${libraryName} --skip-install --no-interactive`,
    { cwd: projectName }
  );
}
if (flags.has("-mat")) {
  runAndCommit("npx ng add @angular/material --interactive=false", {
    cwd: projectName,
  });
}
if (flags.has("-pwa")) {
  runAndCommit("npx ng add @angular/pwa --interactive=false", {
    cwd: projectName,
  });
}
rimraf.sync(`${projectName}/node_modules`);

function runAndCommit(command: string, options?: ExecSyncOptions) {
  execSync(command, options);
  execSync("git add .");
  execSync(`git commit -m "${command}"`);
}
