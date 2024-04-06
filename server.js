const mongoose = require("mongoose");
const DB = process.env.DB;

mongoose
  .connect(DB)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Error connecting to database:", err));
