const fs = require("fs");
const path = require("path");

// Paths used for webpack and tsc. Change to suit your app.
const clientRoot = "app";
const entryFile = path.resolve(__dirname, `${clientRoot}/src/index.tsx`);
const inputDir = path.resolve(__dirname, clientRoot);
const outputDir = path.resolve(__dirname, `${clientRoot}/dist`);

const  appPaths = {
    "client-root": clientRoot,
    "entry-file": entryFile,
    "input-dir": inputDir,
    "output-dir": outputDir
};

function createTsConfig() {

    const stream = fs.createWriteStream(
        path.resolve(__dirname, "tsconfig.json")
    );
    const config = JSON.stringify(
        {
            compilerOptions: {
                outDir: appPaths.outDir,
                sourceMap: true,
                module: "commonjs",
                target: "es2015",
                jsx: "react",
                lib: [
                    "es2015",
                    "dom"
                ]
            },
            exclude: [
                path.resolve(__dirname, "node_modules")
            ]
        }
    );
    stream.write(config);
    stream.close();
}

module.exports = {
    createTsConfig: createTsConfig,
    appPaths: appPaths
};