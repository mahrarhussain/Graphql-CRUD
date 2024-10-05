const mongoose = require("mongoose");
const appConfig = require("./appConfig");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(appConfig.DB_URL);
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
