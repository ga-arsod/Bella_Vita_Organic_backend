const express = require("express");
const Combos = require("../models/combos.model");

const router = express.Router();

router.post("", async(req, res) => {
    try{
        const combos = await Combos.create(req.body);

        return res.status(200).send(combos);
    }
    catch(err) {
        return res.status(401).send({error: err.message});
    }
});

router.get("", async(req, res) => {
    try{
        const combos = await Combos.find().lean().exec();

        return res.status(200).send(combos);
    }
    catch(err) {
        return res.status(401).send({error: err.message});
    }
});



module.exports = router;