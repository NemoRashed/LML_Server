const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServiceSchema = new Schema(
  {
    Name: String,
    Image: String,
  },
  { timestamps: false }
);

const Service = mongoose.model("Service", ServiceSchema);

module.exports = Service;
