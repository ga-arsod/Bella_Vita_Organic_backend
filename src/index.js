const express = require("express");
const cors = require("cors");

const bestSellerController = require("./controllers/bestSellerController");
const {register, login}= require("../src/controllers/authController")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/bestsellers", bestSellerController);

app.post("/login", login);

app.post("/register", register);

module.exports = app;