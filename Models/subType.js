const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubTypesSchema = new Schema(
  {
    Name: String,
    Image: String,
    BrandTypes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BrandTypes",
    },
  },

  { timestamps: false }
);

const SubTypes = mongoose.model("SubTypes", SubTypesSchema);

module.exports = SubTypes;
