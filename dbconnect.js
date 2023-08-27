/** @format */

const mongoose = require("mongoose");
const dotenv = require('dotenv'); 
dotenv.config();

module.exports = async () => {
  const mongouri =
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.juh5t2y.mongodb.net/?retryWrites=true&w=majority`;

  try { 
    const connect = await mongoose.connect(mongouri, {
      useUnifiedTopology: true,
      useNewurlParser: true,
    });

    console.log(`Mongodb Connected : ${connect.connection.host}`);
  } catch (error) {
    console.log("MongoDb connection error", error);
    process.exit(1);
  }
};


