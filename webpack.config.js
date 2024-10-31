const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const { Template } = require("webpack")

module.exports = {
    mode: "development",
    entry: {
        main: [
            path.resolve(__dirname,"src","script1.js"),
            path.resolve(__dirname, "src", "script2.js")
        ]
    },
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "script.min.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/, 
                use: 'html-loader', 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: path.resolve(__dirname, "src", "index.html" ) 
        
        }),
        new MiniCssExtractPlugin({
            filename: 'style.min.css'
        })
    ]

};

