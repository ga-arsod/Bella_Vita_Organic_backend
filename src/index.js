const express = require("express");
const cors = require("cors");

const bestSellerController = require("./controllers/bestSellerController");
const login= require("../src/controllers/logincontroller");
const register= require("../src/controllers/registerController")
// const {register, login}= require("../src/controllers/authController")



const app = express();

app.use(cors());
app.use(express.json());

app.use("/bestsellers", bestSellerController);

app.use("/login", login);

app.use("/register", register);

module.exports = app;