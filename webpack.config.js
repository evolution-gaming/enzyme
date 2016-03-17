var path = require("path"),
    webpack = require("webpack");

module.exports = {
    entry: [path.join(__dirname, "src", "index.js")],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "enzyme.js",
        libraryTarget: "amd"
    },
    externals: {
        jsdom: "window",
        "react/lib/ExecutionEnvironment": "window",
        "react/lib/ReactContext": "window"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ["babel-loader"],
                include: path.join(__dirname, "src")
            },
            {
                test: /\.json$/,
                loader: "json-loader",
            },
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                sequences: true,
                properties: true,
                dead_code: true,
                drop_debugger: true,
                drop_console: true,
                unsafe: false,
                conditionals: true,
                comparisons: true,
                evaluate: true,
                booleans: true,
                loops: true,
                unused: true,
                hoist_funs: true,
                hoist_vars: false,
                if_return: true,
                join_vars: true,
                cascade: true,
                side_effects: true,
                warnings: false
            }
        })
    ],
    resolve: {
        extensions: ["", ".js", ".jsx", ".json"],
        modulesDirectories: [
            // to work with require.js-style non-relative imports
            path.join(__dirname, "src"),
            "node_modules"
        ]
    }
};
