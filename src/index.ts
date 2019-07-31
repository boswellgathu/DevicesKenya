import 'reflect-metadata'

import bodyParser from 'body-parser'
import express from 'express'
import logger from 'morgan'
import config from '../config'
import UserRouter from './users/user.routes'
import { ConnectionOptions, createConnection } from 'typeorm'
import options from '../ormconfig'

createConnection(options).then( async (connection) => {
  const { port } = config
  const app = express()
  app.use(logger('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: false,
  }))

  app.use('/api', UserRouter);
  app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome, How are you?, feeling good? coolbeans yo!',
  }))

  app.listen(port)
  // eslint-disable-next-line no-console
  console.log(`go to http://localhost:${port}`)
})
