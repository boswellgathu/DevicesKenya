import { ConnectionOptions, createConnection } from 'typeorm'
import config from '../ormconfig'

const env: ConnectionOptions = config
const connection = createConnection(env)
