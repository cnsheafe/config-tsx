config-tsx
=

Generates custom tsconfig.json files for automated use with projects that use Typescript and React. Also useful when building with webpack.
-

# Usage

npm install --save-dev config-tsx

const appConfig = require("config-tsx");
appConfig.createTsConfig();