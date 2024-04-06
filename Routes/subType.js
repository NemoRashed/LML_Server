const express = require("express");

const Router = express.Router();

const SubTypes = require("../Controllers/subTypes");

Router.route("/")

  .post(SubTypes.createSubTypes)
  .get(SubTypes.getSubTypes);

Router.route("/:id")
  .get(SubTypes.getSubType)
  .put(SubTypes.updateSubType)
  .delete(SubTypes.deleteSubType);

module.exports = Router;
