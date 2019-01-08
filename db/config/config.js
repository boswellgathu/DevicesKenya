module.exports = {
  development: {
    username: 'devkenya',
    password: null,
    database: 'deviceskenya_dev',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: 'devkenya',
    password: null,
    database: 'deviceskenya_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'postgres'
  }
};
