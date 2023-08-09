/* eslint-disable no-undef */
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connection successfully: ${connect.connection.host}`);
  } catch (error) {
    console.log(`Unable to connect: ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
