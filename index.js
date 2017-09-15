const fs = require("fs");
const path = require("path");

// Paths used for webpack and tsc. Change to suit your app.
function createPaths(projectRoot, options=undefined) {

    if (typeof options === "undefined") {
        clientRoot = "app";
        options = {
            "client-root": clientRoot,
            "entry-file": path.normalize(
                `${projectRoot}/${clientRoot}/src/index.tsx`
            ),
            "input-dir": path.normalize(
                `${projectRoot}/${clientRoot}`
            ),
            "output-dir": path.normalize(
                `${projectRoot}/${clientRoot}/dist`
            )
        }
    }

    return options;
}


function createTsConfig(projectRoot, outDir) {

    const stream = fs.createWriteStream(
        path.normalize(`${projectRoot}/tsconfig.json`)
    );

    const config = JSON.stringify(
        {
            compilerOptions: {
                outDir: outDir,
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
                path.normalize(`${projectRoot}/node_modules`)
            ]
        }
    );

    stream.write(config);
    stream.close();
}

module.exports = {
    createTsConfig: createTsConfig,
    createPaths: createPaths
};