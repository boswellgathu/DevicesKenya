import 'reflect-metadata'

import bodyParser from 'body-parser'
import express from 'express'
import logger from 'morgan'
import config from '../config'

const { port } = config
const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false,
}))

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome, How are you?, feeling good? coolbeans yo!',
}))

app.listen(port)
// eslint-disable-next-line no-console
console.log(`go to http://localhost:${port}`)

module.exports = app
