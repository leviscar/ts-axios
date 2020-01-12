const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    /* 
     * 
     * 读取当前文件夹下所有子文件夹，以其app.ts作为入口文件
     * 
     *  {
     *      test: [
     *           'webpack-hot-middleware/client',
     *          'E:\\Code\\axios\\ts-axios\\demo\\test\\app.ts'
     *      ],
     *       test02: [
     *          'webpack-hot-middleware/client',
     *           'E:\\Code\\axios\\ts-axios\\demo\\test02\\app.ts'
     *       ]
     *   }
    */
    entry: fs.readdirSync(__dirname).reduce((entries, dir) => {
        const fullDir = path.join(__dirname, dir)
        // console.log({'test': path.join(__dirname, 'build')})
        const fileName = path.join(fullDir, 'app.ts')
        // 判断fullDir是不是文件夹，fileName是否存在
        if(fs.statSync(fullDir).isDirectory() && fs.existsSync(fileName)) {
            entries[dir] =  ['webpack-hot-middleware/client', fileName]
        }
        console.log(entries);
        return entries
    }, {}),

    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        publicPath: '/build/'
    },

    // webpack 可以使用 loader 来预处理文件。这允许你打包除 JavaScript 之外的任何静态资源
    module: {
        rules: [
            {
                test:  /\.ts$/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'tslint-loader'
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        // https://github.com/TypeStrong/ts-loader
                        // compilation significantly you can set this flag. 
                        // lost benefits from static type checking between different dependencies
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    // 插件目的在于解决 loader 无法实现的其他事
    // https://webpack.docschina.org/plugins/
    plugins: [
        // 启用模块热替换(Enable Hot Module Replacement - HMR)
        new webpack.HotModuleReplacementPlugin(),
        // 在输出阶段时，遇到编译错误跳过
        new webpack.NoEmitOnErrorsPlugin()
    ]
}