const router = require("express").Router();


const { Order } = require("../models");



// Get All Orders

router.get("/", async(req,res)=>{


try{


const orders = await Order.findAll({

order:[
    ["createdAt","DESC"]
]

});



res.json(orders);



}catch(error){


res.status(500).json({

message:error.message

});


}


});





// Update Order Status


router.patch("/:id/status", async(req,res)=>{


try{


const order = await Order.findByPk(

req.params.id

);



if(!order){


return res.status(404).json({

message:"Order not found"

});


}



await order.update({

orderStatus:req.body.orderStatus

});



res.json({

message:"Order status updated",

status:order.orderStatus

});



}catch(error){


res.status(500).json({

message:error.message

});


}


});






// Update Payment Status


router.patch("/:id/payment", async(req,res)=>{


try{


const order = await Order.findByPk(

req.params.id

);



if(!order){


return res.status(404).json({

message:"Order not found"

});


}



await order.update({

paymentStatus:req.body.paymentStatus

});



res.json({

message:"Payment status updated",

status:order.paymentStatus

});



}catch(error){


res.status(500).json({

message:error.message

});


}


});





module.exports = router;
