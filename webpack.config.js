var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: "./src/app.js",
    output: {
        path: './public',
        filename: "app.js",
    },
    module: {
        loaders: [
            { test: /\.jsx?$/,  loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: "style!css" },
        ],
    },
    resolve: {
        fallback: path.join(__dirname, "node_modules"),
        alias: {
            famous: 'famous/src'
        },
    },
}
