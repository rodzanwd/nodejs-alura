const express = require('express')
require('marko/node-require').install()
require('marko/express')

const app = express()

const rotas = require('../app/routes/routes.js')
rotas(app)

module.exports = app