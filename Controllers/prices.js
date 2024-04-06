const Priceses = require("../Models/prices");

exports.createPrices = async (req, res) => {
  try {
    const { Name, Time, Raw, Labour, SubTypes } = req.body;

    const Shipping = 5;
    const Tax = 10.25;
    const Total = Raw + Raw * Tax + Labour + Shipping;

    const Prices = await Priceses.create({
      Name,
      Time,
      Raw,
      Labour,
      SubTypes,
      Shipping,
      Tax,
      Total,
    });

    res.status(201).json({
      message: "Created a Prices",
      data: Prices,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.getPrices = async (req, res) => {
  try {
    const Prices = await Priceses.find({});
    res.status(200).json({
      message: "found a Prices",
      data: Prices,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.getPrice = async (req, res) => {
  try {
    const Prices = await Priceses.find({
      SubTypes: req.params.id,
    }).populate("SubTypes");
    res.status(200).json({
      message: "found",
      data: Prices,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.updatePrice = async (req, res) => {
  try {
    const Price = await Priceses.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      message: "Price updated",
      data: Price,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
exports.deletePrice = async (req, res) => {
  try {
    await Priceses.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Price deleted",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
