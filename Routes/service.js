const express = require("express");
const Router = express.Router();
const ServiceController = require("../Controllers/service");
const multer = require("multer");

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

Router.route("/")
  .post(upload.single("Image"), ServiceController.createService)
  .get(ServiceController.getServices);

Router.route("/:id")
  .get(ServiceController.getService)
  .put(ServiceController.updateService)
  .delete(ServiceController.deleteService);

module.exports = Router;
