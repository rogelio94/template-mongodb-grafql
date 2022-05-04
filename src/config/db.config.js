require("dotenv").config();

const { MONGO_USER, MONGO_PASSWORD, MONGO_DB } = process.env;

module.exports = {
  url: `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@template.mioqt.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`,
};

