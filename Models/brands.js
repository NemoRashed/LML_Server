const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BrandSchema = new Schema(
  {
    Name: String,
    Image: String,
    Repair: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Repair",
    },
  },

  { timestamps: false }
);

const Brand = mongoose.model("Brand", BrandSchema);

module.exports = Brand;
