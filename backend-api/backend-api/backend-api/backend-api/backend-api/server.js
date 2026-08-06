require("dotenv").config();

const express = require("express");
const cors = require("cors");


const app = express();


// Middleware

app.use(cors());

app.use(express.json());


// Test API

app.get("/", (req, res) => {

    res.json({

        app: "Nimontron API",

        message: "Welcome to Nimontron Backend",

        status: "Running",

        version: "1.0.0"

    });

});


// Future Routes

// app.use("/api/auth", require("./src/routes/authRoutes"));
// app.use("/api/products", require("./src/routes/productRoutes"));
// app.use("/api/orders", require("./src/routes/orderRoutes"));



// Server Start

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

    console.log(
        `Nimontron API running on port ${PORT}`
    );

});
