const mongoose = require("mongoose");
const validator = require("validator");

const reportScheduleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error("Email is invalid");
        }
    }
  },
  date: {
    type: Date,
    required: true
  },
  document: {
    type: Buffer,
    // required: true
  }
});

const ReportSchedule = mongoose.model("Report", reportScheduleSchema);
module.exports = ReportSchedule;