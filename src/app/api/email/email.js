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

const sendScheduledReport = (email, name, date, document) => {
  mg.messages().send({
    from: "Chinedu <Neddymond10@gmail.com>",
    to: email,
    subject: "Report Schedule",
    text: ```Hello ${ name },
    
    This is to remind you that ${document} is scheduled for
    
    date: ${date}.```
  });
};

module.exports = {
  sendScheduledReport
};