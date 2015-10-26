'use strict';

var webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: __dirname + '/dist/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
