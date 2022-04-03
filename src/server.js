require("dotenv").config();
const app = require("./index");
const connect = require("./configs/db");
const port = process.env.PORT || 5000;

app.listen(port, async() => {
    try{
        await connect();
        console.log(`Listening to port ${port} of Bella_Vita_Organic_backend`);
    }
    catch(err) {
        console.error(err);
    }
});
