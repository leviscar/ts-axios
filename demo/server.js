const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
// https://webpack.docschina.org/guides/development/#%E4%BD%BF%E7%94%A8-webpack-dev-middleware
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config')
const router = express.Router()
const app = express()
const compiler = webpack(webpackConfig)

// webpack-dev-middleware 是一个封装器(wrapper)，它可以把 webpack 处理过的文件发送到一个 server
app.use(webpackDevMiddleware(compiler,{
    publicPath: '/build/',
    
    stats: {
        colors: true,
        chunks: false
    }
}))

// 热更新
app.use(webpackHotMiddleware(compiler))

// 静态资源
app.use(express.static(__dirname))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

router.get('/simple/get', function(req, res) {
    res.json({
        msg: 'hello world123'
    })
})

router.get('/base/get', function(req, res) {
    res.json(req.query)
})

router.post('/base/post', function(req, res){
    res.json(req.body)
})

router.post('/base/buffer', function(req, res){
    const msg = []

    req.on('data', (chunk) => {
        chunk && msg.push(chunk)
    })
    req.on('end', () =>{
        res.json(Buffer.concat(msg).toJSON())
    })
})
app.use(router)

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`server is running at prot ${PORT}`)
})
