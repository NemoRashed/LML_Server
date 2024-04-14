const express = require("express");
const Router = express.Router();
const SubTypes = require("../Controllers/subTypes");
const multer = require("multer");

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

Router.route("/")

  .post(upload.single("Image"), SubTypes.createSubTypes)
  .get(SubTypes.getSubTypes);

Router.route("/:id")
  .get(SubTypes.getSubType)
  .put(SubTypes.updateSubType)
  .delete(SubTypes.deleteSubType);

module.exports = Router;
