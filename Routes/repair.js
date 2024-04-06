const express = require("express");

const Router = express.Router();

const RepairController = require("../Controllers/repair");

Router.route("/")

  .post(RepairController.createRepair)
  .get(RepairController.getRepairs);

Router.route("/:id")
  .get(RepairController.getRepair)
  .put(RepairController.updateRepair)
  .delete(RepairController.deleteRepair);

module.exports = Router;
