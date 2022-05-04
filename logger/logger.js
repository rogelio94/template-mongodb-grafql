const pino = require("pino");
const expressPinoLogger = require("express-pino-logger");

const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60,
};

const level = () => {
  const env = process.env.NODE_ENV || "development";
  const isDevelopment = env === "development";
  return isDevelopment ? "debug" : "info";
};

const transport = pino.transport({
  targets: [
    {
      level: level(),
      target: "pino-pretty",
      levels: levels,
      options: {
        colorize: true,
        levelFirst: true,
        translateTime: "yyyy-dd-mm, h:MM:ss TT",
        ignore: "pid,hostname",
      },
    },
    {
      level: level(),
      target: "pino/file",
      options: {
        destination: "logs/all.log",
        mkdir: true,
      },
    },
    {
      level: "error",
      target: "pino/file",
      options: {
        destination: "logs/error.log",
        mkdir: true,
      },
    },
  ],
});

const logger = pino(
  {
    customLevels: levels,
    useOnlyCustomLevels: true,
    level: level(),
  },
  transport
);

const httpLoggerMidleware = expressPinoLogger({
  quietReqLogger: true, // turn off the default logging output
  transport: {
    targets: [
      {
        target: "pino-http-print", // use the pino-http-print transport and its formatting output
        options: {
          destination: 1,
          all: false,
          colorize: true,
          translateTime: "yyyy-dd-mm, h:MM:ss TT",
          relativeUrl: true,
        },
      },
      {
        target: "pino-http-print", // use the pino-http-print transport and its formatting output
        options: {
          destination: "logs/http.log",
          all: false,
          colorize: false,
          translateTime: "yyyy-dd-mm, h:MM:ss TT",
          relativeUrl: true,
        },
      },
      {
        level: level(),
        target: "pino/file",
        options: {
          destination: "logs/all.log",
          mkdir: true,
        },
      },
    ],
  },
});

module.exports = { logger, httpLoggerMidleware };
