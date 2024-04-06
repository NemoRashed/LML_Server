const BrandTypes = require("../Models/brandTypes");

exports.createBrandTypes = async (req, res) => {
  try {
    const BrandType = await BrandTypes.create(req.body);

    res.status(200).json({
      message: "created a Brand Type ",
      data: BrandType,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.getBrandTypes = async (req, res) => {
  try {
    const BrandType = await BrandTypes.find({});
    res.status(200).json({
      message: "found a BrandTypes",
      data: BrandType,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.getBrandType = async (req, res) => {
  try {
    const brandtype = await BrandTypes.find({
      Brand: req.params.id,
      Repair: req.body.id,
    }).populate("Brand", "Repair");
    res.status(200).json({
      message: "found",
      data: brandtype,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.updateBrandType = async (req, res) => {
  try {
    const BrandType = await BrandTypes.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    res.status(200).json({
      message: "BrandType updated",
      data: BrandType,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
exports.deleteBrandType = async (req, res) => {
  try {
    await BrandTypes.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "BrandType deleted",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
