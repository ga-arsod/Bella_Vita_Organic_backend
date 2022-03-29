let mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect( 
        "mongodb+srv://Gaurav:gapars12@cluster0.krruz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
};

module.exports = connect;