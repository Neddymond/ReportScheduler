const express = require("express");
const app = express();
require("./db/mongoose");
const path = require("path");
const port = process.env.PORT || 3000;

// Routers
const reportScheduleRouter = require("./Routes/reportScheduleRouter");

app.use(express.json());
app.use(reportScheduleRouter);

// built in middleware to serve static content just as images, css, html etc
app.use(express.static(path.join(__dirname, '../dist/reportSchedules')));
 
// all get requests will point to angular's index.html in dist folder
app.get('/*', async (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/reportSchedules/index.html"));
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

module.exports = app;