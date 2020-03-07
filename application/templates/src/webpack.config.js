const webpack = require('webpack');
const resolve = require('path').resolve;
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// var HtmlWebpackPlugin = require('html-webpack-plugin');
const isDevelopment = process.env.NODE_ENV === 'development'

const config = {
    entry: __dirname + '/js/index.jsx',
    devtool: 'eval-source-map',
    output:{
        path: resolve('../public'),
        filename: 'js/bundle.js',
        publicPath: resolve('../public')},
    resolve: {
        extensions: ['.js','.jsx','.scss']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: isDevelopment ? '[name].css' : '[name].[hash].css',
            chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.module.(s(a|c)ss)$/,
                loader: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            modules: true,
                            sourceMap: isDevelopment,
                            implementation: require('sass')
                        }
                    }
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                loader: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment,
                            implementation: require('sass')
                        }
                    }
                ]
            }
        ]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         hash: true,
    //         filename: './index.html'
    //     })
    // ]
};

module.exports = config;
