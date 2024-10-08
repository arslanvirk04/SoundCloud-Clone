require('dotenv').config();

const config = {
  environment: process.env.NODE_ENV || "development",
  port: process.env.PORT || 5000, 
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    client : process.env.DB_CLIENT,
  },
  jwtConfig: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
}
module.exports = config;
