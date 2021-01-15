const mongoose = require("mongoose");

const connectionURI = process.env.MONGODB_URL;

mongoose.connect(connectionURI, {
  useNewUrlParser: true,
  useCreateIndex: true
});