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
- **-eslint:** includes angular-eslint config, added with `ng add @angular-eslint/schematics`
- **-fire:** includes firebase, added with `ng add @angular/fire`
- **-lib:** includes a library project, added with `ng generate library the-library`
- **-mat:** includes material design, added with `ng add @angular/material --theme=custom --typography`
- **-noApp:** scaffolds the project with `--createApplication=flase`
- **-pwa:** includes configuration for the app to be a progressive web app, added with `ng add @angular/pwa`
- **-route:** includes configuration for routing, added with the `--routing=true` flag when generating the original project
- **-subApp:** includes an application project, added with `ng generate application the-application`
- **-worker:** includes a web worker, added with `ng generate web-worker app`

## Generating new diffs

1. Start from `master`
1. Ensure you have opted out analytics by running `ng analytics off`
1. If you want to know the latest version: `npm view @angular/cli version`
1. `npm run gen -- X.X.X [-eslint] [-fire] [-lib] [-mat] [-noApp] [-pwa] [-route] [-subApp] [-worker]`
