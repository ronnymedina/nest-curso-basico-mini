const config = {
  DATABASE_URL: process.env.DATABASE_URL_DEV,
}

if (process.env.NODE_ENV === 'test') {
  config.DATABASE_URL = process.env.DATABASE_URL_TEST
}

export default config;
