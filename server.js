const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { logger, httpLoggerMidleware } = require("./logger/logger");

const db = require("./src/models");

const app = express();

const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to template" });
});

app.use(httpLoggerMidleware);

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info("Connected to the database!");
  })
  .catch((err) => {
    logger.error(new Error(`Cannot connect to the database! | ${err}`));
    process.exit();
  });

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
