const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpakConfig = require('./webpack.config')

const app = express()
const compiler = webpack(WebpakConfig)

app.use(webpackDevMiddleware(compiler, {
    publicPath: '/__build__/',
    stats: {
      colors: true,
      chunks: false
    }
  })
)

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const router = express.Router()


router.get('/simple/get', (req, res)=>{
  console.log('simple received')
  console.log(req.query)
  res.json({
    msg: `hello world`
  })
})

router.get('/base/get', (req, res)=>{
  console.log('base received')
  console.log(req.query)
  res.json(req.query)
})

router.post('/base/post', (req, res) => {
  console.log('base post received')
  console.log(req.body)
  res.json(req.body)
})

app.use(router)


app.listen(2000, ()=>{
  console.log('app is running at 127.0.0.1:2000')
})





