var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: "./src/app.ts",
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "app.js",
    },
    module: {
        rules: [ // note, loaders run last to first.
            {
                test: /\.(js|jsx)$/,

                // compiles language features including ES2015+, leaves ES6
                // module syntax for Webpack 2 to handle.  applies polyfills,
                // In production applies minification to each file.
                use: 'babel-loader',

                //enforce: 'pre',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'}, // applies CSS to a style element.
                    {loader: 'css-loader'}, // loads CSS text.
                ],
            },
            {
                test: /\.(ts|tsx)?$/,
                use: [

                    // applies polyfills, leaves ES6 module syntax for Webpack
                    // 2 to handle. In production applies minification to each
                    // file.
                    {loader: 'babel-loader'},

                    // compiles language features only including ES2015+,
                    // leaves ES6 module syntax for Webpack 2 to handle.
                    {loader: 'ts-loader'},
                ],
                //enforce: 'pre',
                exclude: /node_modules/
            },

            //{
                //enforce: 'pre',
                //test: /\.js$/,
                //use: "source-map-loader"
            //},
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx', 'css'],
    },
    devtool: 'inline-source-map', // TODO: disable source maps in production?
}
