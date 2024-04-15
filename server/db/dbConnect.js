const mongoose = require('mongoose');
require('dotenv').config();

async function dbConnect(){
    mongoose.connect(
        process.env.DB_URL,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            //useCreateIndex:true,
        }
    ).then(()=>{
        console.log("Successfully Connected to database");
    }).catch((error)=>{
        console.log("Unable to connect to database");
        console.error(error);
    })

}
module.exports=dbConnect;
