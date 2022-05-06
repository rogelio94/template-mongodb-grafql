const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const Example = new Schema(
  {
    name: String,
  },
  { timestamps: true }
);

const Example2 = (module.exports = mongoose.model("Example2", Example));
module.exports = { Example2 };
