require("dotenv").config();


const express = require("express");

const cors = require("cors");


const initializeDatabase = require("./src/database/init");



const app = express();



app.use(cors());

app.use(express.json());



// Database Start

initializeDatabase();



// Test Route

app.get("/", (req,res)=>{


    res.json({

        app:"Nimontron API",

        status:"Running",

        message:"Backend Connected Successfully"

    });


});





const PORT = process.env.PORT || 5000;



app.listen(PORT,()=>{


console.log(
`Nimontron API running on port ${PORT}`
);


});
