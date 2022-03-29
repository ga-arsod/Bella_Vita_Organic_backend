const express = require("express");
const Product = require("../models/bestSellerModel");

const router = express.Router();

router.post("", async(req, res) => {
    try{
        const product = await Product.create(req.body);

        return res.status(200).send(product);
    }
    catch(err) {
        return res.status(401).send({error: err.message});
    }
});


router.get("", async(req, res) => {
    try{
        const product = await Product.find({}).lean().exec();

        return res.status(200).send(product);
    }
    catch(err) {
        return res.status(401).send({error: err.message});
    }
});

module.exports = router;