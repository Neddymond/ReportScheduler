const ReportSchedule = require("../Models/reportSchedule");
const Report = require("../Models/report");
const express = require("express");
const router = new express.Router();
const multer = require("multer");
const { sendScheduledReport } = require("../email/email");

/** Multer is a middleware for handling file uploads */
const upload = multer({
  limits: {
      fileSize: 5000000
  },
  fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(doc|docx|pdf)$/)) {
          return cb(new Error("Please upload a valid document"));
      }

      cb(undefined, true);
  }
});

/** Endpoint for creating a Schedule */
router.post("/schedule", upload.single("document"), async (req, res) => {
  const body = { ...req.body };
  // const file = req.file.buffer;
  // console.log(body);
  try {
    const schedule = new ReportSchedule({
      ...req.body
    });

    if (!schedule) {
      return res.status(400).send({
        message: "name, email, date are required"
      });
    }

    await schedule.save();

    sendScheduledReport(schedule.email, schedule.name, schedule.date, schedule.document);

    res.send();
  } catch (e) {
    res.status(500).send(e);
  }
});

/** Endpoint for uploading a report */
router.post("/schedule/uploadreport", upload.single("document"), async (req, res) => {
  try {
    const doc = req.file.buffer;
    // console.log(doc);
    const report = new Report(req.file.buffer);
    console.log(report);

    await report.save();

    res.send();
  } catch (e) {
    res.status(500).send(e);
  }
}, (error, req, res, next) => {
  res.status(400).send({ error: error.message});
});

/** Endpoint for fetching all the scheduled report */
router.get("/schedule", async (req, res) => {
  try {
    const report = await ReportSchedule.find({});
    if (!report) {
      return res.status(404).send();
    }
    res.send(report);
  } catch (e) {
    res.status(500).send(e);
  }
});

/** Endpoint for cancelling a scheduled report */
router.delete("/schedule/:id", async (req, res) => {
  try {
    const report = await ReportSchedule.findById(req.params.id);
    if (!report) {
      return res.status(400).send();
    }
    await report.remove();
    res.send(report);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;