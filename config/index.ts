import dotenv from 'dotenv'

dotenv.config({
});

export default {
  env: process.env.NODE_ENV,
  port: Number(process.env.PORT),
  host: process.env.POSTGRES_HOST,
  pg_port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
};
