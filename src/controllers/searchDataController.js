const express = require("express");
const client = require("../configs/redis")
const Product = require("../models/searchDataModel");

const router = express.Router();

// console.log(client);

router.post("", async(req, res) => {
    try{
        const product = await Product.create(req.body);

        const products = await Product.find({}).lean().exec();

        client.set("searchData", JSON.stringify(products));

        return res.status(200).send(product);
    }
    catch(err) {
        return res.status(401).send({error: err.message});
    }
});


router.get("", async(req, res) => {

    try{

        const product = await Product.find({}).lean().exec();
        console.log(product)
        return res.status(300).send(product);

    }
    catch(err) {
        return res.status(300).send(err);

    }
});

module.exports = router;