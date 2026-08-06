const router = require("express").Router();


const { Payment } = require("../models");



// Create Payment

router.post("/", async(req,res)=>{


try{


const payment = await Payment.create(req.body);



res.json({

message:"Payment submitted",

payment

});



}catch(error){


res.status(500).json({

message:error.message

});


}


});





// Get Payment Status

router.get("/:id",async(req,res)=>{


try{


const payment = await Payment.findByPk(
    req.params.id
);



res.json(payment);



}catch(error){


res.status(500).json({

message:error.message

});


}



});



module.exports = router;
