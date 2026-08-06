require("dotenv").config();


const express = require("express");

const cors = require("cors");


const initializeDatabase = require("./src/database/init");


const app = express();



app.use(cors());

app.use(express.json());



// Authentication

app.use(
"/api/auth",
require("./src/routes/authRoutes")
);



// Products

app.use(
"/api/products",
require("./src/routes/productRoutes")
);



// Orders

app.use(
"/api/orders",
require("./src/routes/orderRoutes")
);



// Payments

app.use(
"/api/payments",
require("./src/routes/paymentRoutes")
);



// Admin

app.use(
"/api/admin",
require("./src/routes/adminRoutes")
);



// Test

app.get("/",(req,res)=>{


res.json({

app:"Nimontron API",

status:"Running"

});


});



initializeDatabase();



const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{


console.log(
`Nimontron API running on port ${PORT}`
);


});
