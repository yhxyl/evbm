const path = require("path");
const { VueLoaderPlugin } = require ("vue-loader")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: './src/main.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        // __dirname 可以用来获取当前文件模块所属目录的绝对路径 两个都是动态的
        // __filename 可以用来获取当前文件的绝对路径
        clean: true
    },
    mode: "production",
    resolve: {
        alias: {
            '@': path.join(__dirname, "src")
        },
        extensions: ['vue', '.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: "asset/resource"
            },
            {
                test: /\.less$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "style-loader"}
                ]
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            }
        ]
    },
    devtool: "inline-source-map",
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./public/index.html"
        })
    ]
};
