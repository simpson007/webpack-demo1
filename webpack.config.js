const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode:"production",
    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js'
    },plugins: [new HtmlWebpackPlugin(
        {
            title: "webpack-demo1",
            template: "src/assets/index.html"
        }
    )],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
}