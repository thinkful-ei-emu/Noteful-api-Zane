module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_TOKEN: process.env.API_KEY||'dummy-api-token',
  DATABASE_URL: process.env.DATABASE_URL||'postgresql://dunder-mifflin@localhost/noteful'
};