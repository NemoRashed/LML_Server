const express = require("express");
const Router = express.Router();
const BrandTypes = require("../Controllers/brandTypes");
const multer = require("multer");

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

Router.route("/")

  .post(upload.single("Image"), BrandTypes.createBrandTypes)
  .get(BrandTypes.getBrandTypes);

Router.route("/:id")
  .get(BrandTypes.getBrandType)
  .put(BrandTypes.updateBrandType)
  .delete(BrandTypes.deleteBrandType);

module.exports = Router;
