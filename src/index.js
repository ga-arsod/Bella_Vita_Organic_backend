const express = require("express");
const cors = require("cors");

const bestSellerController = require("./controllers/bestSellerController");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/bestsellers", bestSellerController);

app.use("/login", login);

app.use("/register", register);

module.exports = app;