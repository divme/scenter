/**
 这次的webpack内容演示需要安装node环境
 这是下载地址：https://nodejs.org/en/download/

 也可以去我们的官网观看和了解node和npm基本使用
 http://2017.miaov.com/study -> 搜索node

 同时也还请大家持续关注我们的公开课内容，干货满满……
 http://miaov.com/index.php/news/newsDetail/nid/153

 欢迎大家支持我们莫莫童鞋为大家带来的超干货远程课：
 http://miaov.com/index.php/news/newsDetail/nid/155
 */

const path = require('path');

// console.log( path.resolve(__dirname) );

/*
* 通过module.exports导出一个对象，这个对象是打包的时候使用配置文件
* */
module.exports = {
    // 入口
    //entry: './src/a.js',
    entry: {
        index: './src/a.js',
        rawLoader: './src/rawLoader.js',
        urlLoader: './src/urlLoader.js',
        jsonLoader: './src/jsonLoader.js',
        babelLoader: './src/babelLoader.js',
    },
    // 出口，打包后生成的文件
    output: {
        // 打包后的文件存放的目录
        // 通过 path.resolve(__dirname) 获取当前项目所在绝对路径，方便项目移植
        path: path.resolve(__dirname) + '/dist',
        // 打包后的文件名
        //filename: 'bundle.js'
        filename: '[name].js'
    },

    /*
    * 设置loader处理
    * */
    module: {
        // 应用规则
        rules: [
            // 其中的一个规则，当某个默认的后缀是.txt，那么就应用此规则调用use指定loader进行预处理
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },

            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        // 如果图片大小小于limit设置，编译成dataUrl格式，否则就是一个url
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },

            {
                test: /\.json$/,
                loader: 'json-loader'
            },

            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};