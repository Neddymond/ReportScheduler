const express = require("express");
const app = express();
require("./db/mongoose");
const port = process.env.PORT || 3000;

// Routers
const reportScheduleRouter = require("./Routes/reportScheduleRouter");
// const taskRouter = require("./routes/taskRouter");

app.use(express.json());
app.use(reportScheduleRouter);
// app.use(taskRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));

module.exports = app;