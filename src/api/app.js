const express = require("express");
const app = express();
require("./db/mongoose");
const port = process.env.PORT || 3000;

// Routers
const reportScheduleRouter = require("./Routes/reportScheduleRouter");

app.use(express.json());
app.use(reportScheduleRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));

module.exports = app;