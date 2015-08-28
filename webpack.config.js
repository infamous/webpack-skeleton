var webpack = require('webpack')
module.exports = {
    entry: "./src/app.js",
    output: {
        path: './public',
        filename: "app.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve: {
        alias: {
            famous: 'famous/src'
        }
    }
}
