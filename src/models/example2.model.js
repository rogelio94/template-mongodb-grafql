const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const Example2 = new Schema(
  {
    name: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Example2", Example2);
