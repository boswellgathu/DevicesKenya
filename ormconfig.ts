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
    'db/entities/**/*.ts'
  ],
  migrations: [
    'db/migrations/**/*.ts'
  ],
  subscribers: [
    'db/subscribers/**/*.ts'
  ],
  cli: {
    entitiesDir: 'db/entities',
    migrationsDir: './db/migrations',
    subscribersDir: 'db/subscribers'
  }
};

export = config;
