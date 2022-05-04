const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const Example = new Schema(
  {
    name: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Example", Example);
