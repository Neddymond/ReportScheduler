const ReportSchedule = require("../Models/reportSchedule");
const express = require("express");
const router = new express.Router();
const multer = require("multer");

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
router.post("/schedule", async (req, res) => {
  try {
    const schedule = new ReportSchedule({ ...req.body });

    if (!schedule) {
      return res.status(400).send({
        message: "name, email, date are required"
      });
    }

    await schedule.save();

    res.send();
  } catch (e) {
    res.status(500).send(e);
  }
});

/** Endpoint for uploading a report */
router.post("/schedule/uploadreport", upload.single("report"), async (req, res) => {
  try {
    const report = new ReportSchedule({
      report: req.file.buffer
    });

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

/** Endpoint for deleting a scheduled report */
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