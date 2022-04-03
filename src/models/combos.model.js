const mongoose = require("mongoose");

const combosschema = new mongoose.Schema(
    {
        Category: {type: String, required: true},
        Name: {type: String, required: true},
        Img_url: {type: String, required: true},
        Price: {type: Number, required: true},
        Price1: {type: Number, required: true}, 
        Rating: {type: Number, required: true}, 
        Review: {type: Number, required: true},
        dis: {type: String, required: true},
        Qty: {type: Number, required: true}
    }
);

const Combos = mongoose.model("combos", combosschema);

module.exports = Combos;