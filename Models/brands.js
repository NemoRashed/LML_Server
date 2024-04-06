const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BrandSchema = new Schema(
  {
    Name: String,
    Image: String,
    Service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
    },
  },

  { timestamps: false }
);

const Brand = mongoose.model("Brand", BrandSchema);

module.exports = Brand;
