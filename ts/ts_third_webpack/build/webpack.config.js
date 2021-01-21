// 引入一个包
const path = require('path');
// 在webpack.config.js引入
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入clean插件
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

function resolve(dir) {
    return path.resolve(__dirname, '..', dir)
}

// webpack中的所有的配置信息都应该写在module.exports中
module.exports = {
    mode: isProd ? "production" : "development",
    // 指定入口文件
    entry: "./src/main.ts",
    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: resolve('dist'),
        // 打包后文件的文件
        filename: '[name].[contenthash:8].js',
        // 告诉webpack 不使用箭头函数
        // environment: {
        //     arrowFunction: false
        // }
    },
    // 指定webpack打包时要使用的模块
    module: {
        // 指定要加载的规划
        rules: [{
            // test指定规则生效的文件
            test: /\.tsx?$/,
            use: 'ts-loader', // 主要使用ts-loader对src文件里的文件进行打包编译
            include: [resolve('src')],
        }]
    },
    // 配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],
    // 用来设置引用模块(哪些文件可以做为模块 )
    resolve: {
        extensions: ['.ts', 'tsx', '.js']
    },
    devtool: isProd ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',
    devServer: {
        host: 'localhost', // 主机名
        stats: "errors-only", // 打包日志输出错误信息
        port: 8081,
        open: true
    }

};