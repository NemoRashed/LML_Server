const express = require("express");

const Router = express.Router();

const Prices = require("../Controllers/prices");

Router.route("/")

  .post(Prices.createPrices)
  .get(Prices.getPrices);

Router.route("/:id")
  .get(Prices.getPrice)
  .put(Prices.updatePrice)
  .delete(Prices.deletePrice);

module.exports = Router;
