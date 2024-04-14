const ServiceModel = require("../Models/service");
const cloudinary = require("../utils/cloudinary");

exports.getServices = async (req, res) => {
  try {
    const Service = await ServiceModel.find({});

    res.status(200).json({
      message: "all Service",
      data: Service,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.createService = async (req, res) => {
  try {
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    const createService = await ServiceModel.create({
      Name: req.body.Name,
      Image: result.secure_url,
    });

    res.status(200).json({
      message: "Service created",
      data: createService,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.getService = async (req, res) => {
  try {
    const Service = await ServiceModel.findById(req.params.id);
    res.status(200).json({
      message: "you search and it is here",
      data: Service,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.updateService = async (req, res) => {
  try {
    console.log(req.body);
    const Service = await ServiceModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    res.status(200).json({
      message: "Service updated",
      data: Service,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
exports.deleteService = async (req, res) => {
  try {
    await ServiceModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Service deleted",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
