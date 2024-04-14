const SubTypes = require("../Models/subType");
const cloudinary = require("../utils/cloudinary");

exports.createSubTypes = async (req, res) => {
  try {
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    const SubType = await SubTypes.create({
      Name: req.body.Name,
      Image: result.secure_url,
    });

    res.status(200).json({
      message: "created a SubType ",
      data: SubType,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.getSubTypes = async (req, res) => {
  try {
    const SubType = await SubTypes.find({});
    res.status(200).json({
      message: "found a SubTypes",
      data: SubType,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.getSubType = async (req, res) => {
  try {
    const Subtype = await SubTypes.find({
      BrandTypes: req.params.id,
    }).populate("BrandTypes");
    res.status(200).json({
      message: "found",
      data: Subtype,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.updateSubType = async (req, res) => {
  try {
    const SubType = await SubTypes.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      message: "SubType updated",
      data: SubType,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
exports.deleteSubType = async (req, res) => {
  try {
    await SubTypes.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "SubType deleted",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
