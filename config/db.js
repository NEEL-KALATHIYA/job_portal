const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connect to database ");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = connectDb;
