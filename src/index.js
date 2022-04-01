const express = require("express");
const cors = require("cors");

const bestSellerController = require("./controllers/bestSellerController");
const allProducts = require("./controllers/allProductsController");
const searchData = require("./controllers/searchDataController");
const {register, login}= require("../src/controllers/authController")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/bestsellers", bestSellerController);
app.use("/allProducts", allProducts);
app.use("/searchData", searchData);

app.use("/login", login);

app.use("/register", register);

module.exports = app;