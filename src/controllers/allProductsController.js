const express = require("express");
const client = require("../configs/redis")
const Product = require("../models/allProductsModel");

const router = express.Router();

// console.log(client);

router.post("", async(req, res) => {
    try{
        const product = await Product.create(req.body);

        const products = await Product.find({}).lean().exec();

        client.set("allProducts", JSON.stringify(products));

        return res.status(200).send(product);
    }
    catch(err) {
        return res.status(401).send({error: err.message});
    }
});


router.get("", async(req, res) => {
    try{
        const page = +req.query.page || 1;
        const pageSize = +req.query.size || 21;

        client.get(`allProducts`, async function(err, fetchedProducts) {
            if(fetchedProducts) {
                const products = JSON.parse(fetchedProducts);

                return res.status(201).send(products);
            }
            else {
                try{
                    const offset = (page - 1) * pageSize;

                    const products = await Product.find({}).lean().exec();

                    client.set(`allProducts`, JSON.stringify(products));

                    return res.status(200).send(products);
                }
                catch(err) {
                    return res.status(500).send({error: err.message});
                }
            }
        })
    }
    catch(err) {
        return res.status(401).send({error: err.message});
    }
});

module.exports = router;