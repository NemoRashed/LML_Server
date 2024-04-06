const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RepairSchema = new Schema(
  {
    Name: String,
    Image: String,
  },
  { timestamps: false }
);

const Repair = mongoose.model("Repair", RepairSchema);

module.exports = Repair;
