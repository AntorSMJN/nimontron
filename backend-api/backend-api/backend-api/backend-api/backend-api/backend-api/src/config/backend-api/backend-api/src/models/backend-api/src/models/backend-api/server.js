require("dotenv").config();


const express = require("express");

const cors = require("cors");


const initializeDatabase = require("./src/database/init");


const app = express();



// Middleware

app.use(cors());

app.use(express.json());



// Authentication Route

app.use(
    "/api/auth",
    require("./src/routes/authRoutes")
);



// Product Route

app.use(
    "/api/products",
    require("./src/routes/productRoutes")
);



// Order Route

app.use(
    "/api/orders",
    require("./src/routes/orderRoutes")
);



// Test Route

app.get("/", (req,res)=>{


    res.json({

        app:"Nimontron API",

        status:"Running",

        message:"Backend Connected Successfully"

    });


});



// Database Connection

initializeDatabase();



// Server Start

const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{


    console.log(
        `Nimontron API running on port ${PORT}`
    );


});
