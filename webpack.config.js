const path = require("path");
module.exports = {
    entry: "./src/index.jsx",
    output: {
        filename: "script.js",
        path: path.resolve(__dirname, "./public")
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }
        ]
    }
}