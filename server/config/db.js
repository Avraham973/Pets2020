/** @format */

require('dotenv-extended').load();

const mongoose = require('mongoose');
const { MONGO_URI } = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.log('MongoDB falid to connect.');
    console.log('====================================');
    console.error(err.message);
    //Exit process with failure
    process.exit(1);
  }
};

// export default connectDB;
module.exports = connectDB;
