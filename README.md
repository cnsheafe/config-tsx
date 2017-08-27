Config-TSX
=

Generates custom tsconfig.json files for automated use with projects that use Typescript and React. Also useful when building with webpack.

Usage
-

```javascript
npm install --save-dev config-tsx

const appConfig = require("config-tsx");
const appSettings = appConfig.createPaths(__dirname);

appConfig.createTsConfig(__dirname, appSettings["output-dir"]);
```

[Example with Webpack]
-

Source code can be found [here](https://github.com/cnsheafe/react-from-scratch).

```javascript
const appConfig = require("config-tsx");


const appSettings = appConfig.createPaths(__dirname);


appConfig.createTsConfig(__dirname, appSettings["output-dir"]);

module.exports = {
    entry: appSettings["entry-file"],
    output: {
        path: appSettings["output-dir"],
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    appSettings["input-dir"]
                ],
                loader: "babel-loader",
                options: {
                    presets: [
                        "es2015",
                        "react"
                    ]
                }
            },
            {
                test: /\.tsx?$/,
                include: [
                    appSettings["input-dir"]
                ],
                loader: "awesome-typescript-loader",
                options: {
                    useBabel: true,
                    babelOptions: {
                        presets: [
                            "es2015",
                            "react"
                        ]
                    },
                    useCache: true
                }
            }
        ]
    },
    resolve: {
        modules: [
            "node_modules",
            appSettings["input-dir"]
        ],
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
    },
    devtool: "source-map",
    devServer: {
        contentBase: appSettings["output-dir"],
        compress: true,
        port: 3000,
        historyApiFallback: true
    },
    context: __dirname,
    externals: {
        react: "React",
        "react-dom": "ReactDOM"
    }
}
```

Additional Considerations
-

Add tsconfig to your .gitignore since the paths will be different from computer to computer.

### .gitignore

```git
./tsconfig.json
```