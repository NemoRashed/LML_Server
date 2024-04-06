const express = require("express");

const Router = express.Router();

const ServiceController = require("../Controllers/service");

Router.route("/")

  .post(ServiceController.createService)
  .get(ServiceController.getServices);

Router.route("/:id")
  .get(ServiceController.getService)
  .put(ServiceController.updateService)
  .delete(ServiceController.deleteService);

module.exports = Router;
