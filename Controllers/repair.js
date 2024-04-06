const RepairModel = require("./../Models/repair");

exports.getRepairs = async (req, res) => {
  try {
    const Repair = await RepairModel.find({});

    res.status(200).json({
      message: "all Repair",
      data: Repair,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.createRepair = async (req, res) => {
  try {
    const createRepair = await RepairModel.create(req.body);
    res.status(200).json({
      message: "Repair created",
      data: createRepair,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.getRepair = async (req, res) => {
  try {
    const Repair = await RepairModel.findById(req.params.id);
    res.status(200).json({
      message: "you search and it is here",
      data: Repair,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.updateRepair = async (req, res) => {
  try {
    console.log(req.body);
    const Repair = await RepairModel.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      message: "Repair updated",
      data: Repair,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
exports.deleteRepair = async (req, res) => {
  try {
    await RepairModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Repair deleted",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
