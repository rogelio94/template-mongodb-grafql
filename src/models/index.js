/* eslint-disable import/extensions */
const mongoose = require("mongoose");
const dbConfig = require("../config/db.config.js");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.example = require("./example.model.js");

module.exports = db;
