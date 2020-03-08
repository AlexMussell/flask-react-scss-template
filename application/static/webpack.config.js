const webpack = require('webpack');
// const resolve = require('path').resolve;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDevelopment = process.env.NODE_ENV === 'development';

const config = {
    entry: {
        main: __dirname + '/js/index.jsx'
    },
    devtool: 'eval-source-map',
    output:{
        path: __dirname + '/dist',
        filename: '[name].[chunkhash].js'
    },
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
                test: /\scss\/main.s(a|c)ss$/,
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
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            inject: false,
            hash: true,
            template: './index-template.html',
            filename: '../../templates/index.html'
        })
    ]
};

module.exports = config;
