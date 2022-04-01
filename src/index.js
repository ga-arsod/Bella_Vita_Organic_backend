const express = require("express");
const cors = require("cors");

const bestSellerController = require("./controllers/bestSellerController");
const allProducts = require("./controllers/allProductsController");
const searchData = require("./controllers/searchDataController");


//Updated Validation for these paths
const login= require("../src/controllers/logincontroller");
const register= require("../src/controllers/registerController")
// const {register, login}= require("../src/controllers/authController") ---->this register and login doesnt contain validation



const app = express();

app.use(cors());
app.use(express.json());

app.use("/bestsellers", bestSellerController);
app.use("/allProducts", allProducts);
app.use("/searchData", searchData);

app.use("/login", login);

app.use("/register", register);

module.exports = app;