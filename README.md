# Angular CLI diffs

This repository exposes an Angular CLI app generated with the following commands for select versions of the Angular CLI

```bash
ng new the-project
cd the-project
ng generate library the-library
```

Inspired by https://github.com/cexbrayat/angular-cli-diff. The difference is that project does not include a call to `ng generate library`.

## Using the diffs

Visit a URL like this to view the relevant diffs: https://github.com/simontonsoftware/angular-cli-diffs/compare/7.0.5..8.0.0. Ignore any files that are at the root of the repository; the relevant files are all in `the-project/`.

## Generating new diffs

1. Start from `master`
1. `npx ts-node generate-version X.X.X [-lib] [-mat] [-pwa]`
