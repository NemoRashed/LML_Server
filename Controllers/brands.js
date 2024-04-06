const Brands = require("../Models/brands");
//const Repairs = require("../Brandss/repair");

exports.createBrands = async (req, res) => {
  try {
    const createBrands = await Brands.create(req.body);

    res.status(200).json({
      message: "created a Brands ",
      data: createBrands,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.getBrands = async (req, res) => {
  try {
    const Brand = await Brands.find({});
    res.status(200).json({
      message: "found a brand",
      data: Brand,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.getBrand = async (req, res) => {
  try {
    const brand = await Brands.find({
      Repair: req.params.id,
      Brand: req.params.id,
    }).populate("Repair");
    res.status(200).json({
      message: "found",
      data: brand,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.updateBrand = async (req, res) => {
  try {
    const Brand = await Brands.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      message: "Brand updated",
      data: Brand,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
exports.deleteBrand = async (req, res) => {
  try {
    await Brands.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Brand deleted",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
