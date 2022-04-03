const express = require("express");
const cors = require("cors");

const bestSellerController = require("./controllers/bestSellerController");
const allProducts = require("./controllers/allProductsController");
const searchData = require("./controllers/searchDataController");
const combo = require("./controllers/combos.controller")

//Updated Validation for these paths
const login= require("../src/controllers/logincontroller");
const register= require("../src/controllers/registerController")
// const {register, login}= require("../src/controllers/authController") ---->this register and login doesnt contain validation



const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async(req, res) => {
    try{
        res.status(200).send("HEllo")
    }
    catch(err) {
        res.status(400).send(err)
    }
})

app.use("/bestsellers", async(req,res) => {
    return res.send("Bestsellers")
});
app.use("/allProducts", allProducts);
app.use("/searchData", searchData);
app.use("/combos",combo)
app.use("/login", login);

app.use("/register", register);

module.exports = app;