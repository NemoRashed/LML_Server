const express = require("express");

const Router = express.Router();

const BrandTypes = require("../Controllers/brandTypes");

Router.route("/")

  .post(BrandTypes.createBrandTypes)
  .get(BrandTypes.getBrandTypes);

Router.route("/:id")
  .get(BrandTypes.getBrandType)
  .put(BrandTypes.updateBrandType)
  .delete(BrandTypes.deleteBrandType);

module.exports = Router;
