/* eslint-disable import/extensions */
const mongoose = require("mongoose");
const dbConfig = require("../config/db.config.js");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.Example1 = require("./example1.js");
db.Example2 = require("./example2.js");

module.exports = db;
