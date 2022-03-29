const express = require("express");
const cors = require("cors");

const bestSellerController = require("./controllers/bestSellerController");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/bestsellers", bestSellerController);

module.exports = app;