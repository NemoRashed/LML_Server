const express = require("express");

const Router = express.Router();

const BrandsController = require("../Controllers/brands");

Router.route("/")

  .post(BrandsController.createBrands)
  .get(BrandsController.getBrands);

Router.route("/:id")
  .get(BrandsController.getBrand)
  .put(BrandsController.updateBrand)
  .delete(BrandsController.deleteBrand);

module.exports = Router;
