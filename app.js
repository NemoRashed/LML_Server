require("dotenv").config();
require("./server");
const express = require("express");
const app = express();
app.use(express.json());

//routes
const Service = require("./Routes/service");
const brands = require("./Routes/brands");
const brandTypes = require("./Routes/brandTypes");
const subTypes = require("./Routes/subType");
const prices = require("./Routes/prices");

//middle ware
app.use("/api/service", Service);
app.use("/api/brands", brands);
app.use("/api/brandtype", brandTypes);
app.use("/api/subtype", subTypes);
app.use("/api/prices", prices);

const port = process.env.PORT;
app.listen(port, () => console.log(`started on port ${port}`));
