const express= require("express");
const jwt = require('jsonwebtoken');
require('dotenv').config()


const User= require("../models/userModel");
const { body, validationResult } = require('express-validator');

const router= express.Router();

const newToken=(user)=>{
    return jwt.sign({user}, `${process.env.SECTRET_KEY}`);
}

router.post("/", body("email").not().isEmpty().withMessage("Please give email").isEmail().withMessage("Please enter valid email"),
body("password").not().isEmpty().withMessage("Please Enter Password"),
async(req, res) => {
    try {
        var user= await User.findOne({email: req.body.email})
        if(!user)
        {
            return res.status(501).send("Incorrect Email or password")
        }
        const match= user.checkPassword(req.body.password);
        if(!match)
        {
            return res.status(500).send("Incorrect Email or password")
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const token= newToken(user);
        return res.status(200).send({user, token})

    } catch (error) {
        return res.send("error:" + error.message)
    }
})

module.exports= router;
