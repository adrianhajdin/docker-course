// create a task model
const mongoose = require("mongoose");

const AnimSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Anim = mongoose.model("Anim", AnimSchema);

module.exports = Anim;
