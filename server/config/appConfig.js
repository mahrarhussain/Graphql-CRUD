const dotenv = require("dotenv");
const env =
  process.env.NODE_ENV === "production" ? "production" : "development";

dotenv.config({
  path: `${__dirname}/../.env.${env}`,
});

const processEnv = process.env;

module.exports = {
  DB_URL: processEnv.MONGO_URI,
  PORT: processEnv.PORT,
  NODE_ENV: processEnv.NODE_ENV,
};
