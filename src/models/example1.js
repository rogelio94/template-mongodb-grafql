const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const Example = new Schema(
  {
    name: String,
  },
  { timestamps: true }
);

const Example1 = (module.exports = mongoose.model("Example1", Example));
module.exports = { Example1 };
