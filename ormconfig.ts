import { ConnectionOptions } from 'typeorm'
import config_env from './config'

const config: ConnectionOptions = {
  type: 'postgres',
  host: config_env.host,
  port: config_env.pg_port,
  username: config_env.username,
  password: config_env.password,
  database: config_env.database,
  entities: [
    'dist/db/entities/**/*.js'
  ],
  migrations: [
    'dist/db/migrations/**/*.js'
  ],
  subscribers: [
    'dist/db/subscribers/**/*.js'
  ],
  cli: {
    entitiesDir: 'db/entities',
    migrationsDir: 'db/migrations',
    subscribersDir: 'db/subscribers'
  }
}

export = config
