const express = require("express");
const Router = express.Router();
const BrandsController = require("../Controllers/brands");
const multer = require("multer");

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

Router.route("/")

  .post(upload.single("Image"), BrandsController.createBrands)
  .get(BrandsController.getBrands);

Router.route("/:id")
  .get(BrandsController.getBrand)
  .put(BrandsController.updateBrand)
  .delete(BrandsController.deleteBrand);

module.exports = Router;
