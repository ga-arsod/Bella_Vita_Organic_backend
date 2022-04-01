const express= require("express");
const jwt = require('jsonwebtoken');
require('dotenv').config()


const User= require("../models/userModel");
const { body, validationResult } = require('express-validator');

const router= express.Router();

const newToken=(user)=>{
    return jwt.sign({user},`${process.env.SECTRET_KEY}`);
}

router.post("/",body("firstName").not().isEmpty().withMessage("Please give First name"),
body("lastName").not().isEmpty().withMessage("Please give Last name"),
body("email").not().isEmpty().withMessage("Please give email").isEmail().withMessage("Please enter valid email").custom(async(value)=>{
    const user= await User.findOne({email:value});
    if(user){
        throw new Error("Email Already Exsists")
    }
    return true;
}),
body("password").not().isEmpty().withMessage("Please enter Password").trim().isLength({min:8}).withMessage("Password should be of minimum 8 digits"),
async (req, res) => {
    try {
        var user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).send({ error: "Email Already Exists" })
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        user = await User.create(req.body);
        const token= newToken(user);
        // console.log(token)

        return res.status(200).send({user, token})
    } catch (error) {
        return res.send("error:" + error.message)
    }
})

module.exports= router;