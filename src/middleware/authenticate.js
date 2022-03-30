const jwt = require('jsonwebtoken');
require('dotenv').config()

const verifyTheToken=(token)=>{
    return new Promise((resolve, reject)=>{
        var decoded = jwt.verify(token, process.env.SECTRET_KEY, function(err, decoded) {
            if(err) 
            {
                return reject(err)
            };
            return resolve(decoded)
          });
    })
}

const authenticate= async(req, res, next)=>{
    if(!req.headers.authorization)
    {
        res.status(500).send("Authentication token not found or wrong");
    }
    if(!req.headers.authorization.startsWith("Bearer "))
    {
        res.status(500).send("Authentication token not found or wrong"); 
    }
    const token= req.headers.authorization.trim().split(" ")[1];
    let decoded;
    try { 
        decoded= await verifyTheToken(token)
    } catch (error) {
        res.status(500).send("Authentication token not found or wrong"); 
    }
    // console.log(decoded);
    req.user= decoded.user;

    next();
    
}

module.exports= authenticate;