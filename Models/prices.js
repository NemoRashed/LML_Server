const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PricesSchema = new Schema(
  {
    Name: String,
    Time: Number,
    Shipping: Number,
    Tax: Number,
    Raw: Number,
    Labour: Number,
    Total: Number,

    SubTypes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubTypes",
    },
  },

  { timestamps: false }
);

const Prices = mongoose.model("Prices", PricesSchema);

module.exports = Prices;
