const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const routes = require('./routes/routes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type')
  res.setHeader('Content-Type', 'application/json')

  next()
})

app.use(routes)

module.exports = app
