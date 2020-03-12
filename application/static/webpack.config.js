const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require("webpack-md5-hash");
const StylelintPlugin = require('stylelint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
    module: {
        rules: [
            {
                test: /\.jsx?/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.module\.s(a|c)ss$/,
                use: [
					isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: isDevelopment
                        }
                    },
                    'postcss-loader',
					{
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment,
                            implementation: require('sass')
                        }
					}
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                use: [
					isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
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
        }),
        new MiniCssExtractPlugin({
            filename: isDevelopment ? '[name].css' : '[name].[hash].css',
            chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
        }),
        new StylelintPlugin(),
        new WebpackMd5Hash(),
        new CleanWebpackPlugin()
    ]
};

module.exports = config;
