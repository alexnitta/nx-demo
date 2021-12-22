# `@storybox/utils`

## src/getWebpackEnvVar.ts

Looks up a variable from `src/environments.ts`. The idea is to keep our various API credentials in one place and then reference them from there. In a server-side app, we would use `.env` files to do this. Since this is client-side code, we can't truly hide these variables from the end user, because they will always be bundled into the code, but we can at least minimize their surface area.

In `packages/desktop` and `packages/web`, the script provided by Create React App (via react-app-rewired) is already setting `process.env.NODE_ENV` for us. When running `react-app-rewired start`, `process.env.NODE_ENV` is set to `development`; when running `react-app-rewired build`, it's set to `production`. However, we need to override this behavior when we are purposefully building the app in "production" mode with Webpack but we want to use values (i.e. API endpoints) that correspond to staging environments for CI/CD purposes. To do this, we are using the `env-cmd` npm package to set up a env variable called `REACT_APP_CUSTOM_NODE_ENV`. When this is available, `getWebpackEnvVar` will refer to this environment instead.

Structure of `src/environments`:

```javascript
export const environments = {
    // these objects will grow over time
    development: {
        AWS_REGION: 'foo',
        AWS_APP_CLIENT_ID: 'foo',
        AWS_IDENTITY_POOL_ID: 'foo',
        AWS_USER_POOL_ID: 'foo',
    },
    staging: {
        // same structure as development
    },
    production: {
        // same structure as development
    },
};
```
