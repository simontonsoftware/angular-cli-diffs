# Angular CLI diffs

This repository exposes an Angular CLI app generated with the following commands for select versions of the Angular CLI

```bash
ng new the-project
cd the-project
ng generate library the-library
```

Inspired by https://github.com/cexbrayat/angular-cli-diff, this project does the same thing but with many variations on how the project is configured.

## Using the diffs

Visit a URL like this to view the relevant diffs: https://github.com/simontonsoftware/angular-cli-diffs/compare/7.0.5..8.0.0. Ignore any files that are at the root of the repository; the relevant files are all in `the-project/`.

The branch names reveal which options were used to generate them. The options are:
- **-lib:** includes a library project, added with `ng generate library the-library`
- **-mat:** includes material design, added with `ng add @angular/material`
- **-pwa:** includes configuration for the app to be a progressive web app, added with `ng add @angular/pwa`
- **-route:** includes configuration for routing, added with the `--routing=true` flag when generating the original project

## Generating new diffs

1. Start from `master`
1. `npx ts-node generate-version X.X.X [-lib] [-mat] [-pwa] [-route]`
