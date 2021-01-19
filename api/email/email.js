const mailgun = require("mailgun-js");
const API_KEY = process.env.API_KEY;
const DOMAIN = process.env.DOMAIN;
const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN });

const data = {
  from: "Chinedu <Neddymond10@gmail.com>",
  to: "Neddymond10@gmail.com",
  subject: "Testing",
  text: "Man, I'm testing mailgun's API"
};

const sendScheduledReport = (scheduleMode, date, email, name, document) => {
  if (scheduleMode === oneoff) {
    mg.messages().send({
      from: "Chinedu <Neddymond10@gmail.com>",
      to: email,
      subject: "Report Schedule",
      text: `Hello ${name}, view this document:`,
      attachment: `${document}`
    });
  } else if (scheduleMode === recurring) {
    mg.messages().send({
      from: "Chinedu <Neddymond10@gmail.com>",
      to: email,
      subject: "Report Schedule",
      text: `Hello ${name}, view this document:`,
      attachment: `${document}`,
      "o:deliverytime": `${date}`
    });
  }
};

module.exports = {
  sendScheduledReport
};