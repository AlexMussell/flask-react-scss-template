const webpack = require('webpack');
const resolve = require('path').resolve;

const config = {
    entry: __dirname + '/js/index.jsx',
    devtool: 'eval-source-map',
    output:{
        path: resolve('../public'),
        filename: 'bundle.js',
        publicPath: resolve('../public')},
    resolve: {
    extensions: ['.js','.jsx','.css']
    },
    module: {
        rules: [
        {
            test: /\.jsx?/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['react','es2015']
            }
        }]
    }
};

module.exports = config;
