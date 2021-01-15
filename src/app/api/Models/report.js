const mongoose = require("mongoose");
const validator = require("validator");

const document = new mongoose.Schema({
  document: {
    type: Buffer
  }
});

const Document = mongoose.model("Document", document);
module.exports = Document;