const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BrandTypesSchema = new Schema(
  {
    Name: String,
    Image: String,
    Brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
    },
  },

  { timestamps: false }
);

const BrandTypes = mongoose.model("BrandTypes", BrandTypesSchema);

module.exports = BrandTypes;
