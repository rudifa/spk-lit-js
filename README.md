# New Project

> ✨ Bootstrapped with Create Snowpack App (CSA) with [app-template-lit-element](https://github.com/snowpackjs/snowpack/tree/main/create-snowpack-app/app-template-lit-element).

> ✨ Adapted by [rudifa](https://github.com/rudifa) to use Lit ^2.0.2 (instead of lit-element ^2.4.0, lit-html ^1.4.0

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds the app for production to the `dist/` folder.
It correctly bundles the app in production mode and optimizes the build for the best performance.

## Directives

In case you need to add a directive like `classMap` you should add the extension to the import:

```
import { classMap } from "lit-html/directives/class-map.js";
```
