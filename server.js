const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const cors = require("cors");

require("dotenv").config();

const { logger, httpLoggerMidleware } = require("./logger/logger");

const typeDefs = require("./src/types");
const resolvers = require("./src/resolvers");
const models = require("./src/models");

const db = require("./src/models");

const PORT = process.env.PORT;

const app = express();

//db connection
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

app.get("/", (req, res) => {
  res.json("Welcome to template");
});

app.use(httpLoggerMidleware);

// cors configuration
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

async function start() {
  try {
    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
      context: { models },
    });
    await apolloServer.start();

    apolloServer.applyMiddleware({ app });

    app.use("*", (req, res) => res.status(404).json("Not found"));

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
