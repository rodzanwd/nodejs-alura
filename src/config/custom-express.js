const express = require('express')
const bodyParser = require('body-parser')
require('marko/node-require').install()
require('marko/express')

const app = express()

const rotas = require('../app/routes/routes.js')
rotas(app)

app.use(bodyParser.urlencoded({ extended:true}))
app.use(bodyParser.json())
app.use(multiparty())

app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    res.setHeader("Access-Control-Allow-Headers", "content-type")
    res.setHeader("Access-Control-Allow-Credentials", true)

    next()
})

module.exports = app     