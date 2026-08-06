const router = require("express").Router();


const {
    Product,
    Category
} = require("../models");



// Add Product

router.post("/products", async(req,res)=>{


try{


const product = await Product.create(req.body);



res.json({

message:"Product added successfully",

product

});



}catch(error){


res.status(500).json({

message:error.message

});


}


});





// Update Product


router.put("/products/:id", async(req,res)=>{


try{


const product = await Product.findByPk(
    req.params.id
);



if(!product){


return res.status(404).json({

message:"Product not found"

});


}



await product.update(req.body);



res.json({

message:"Product updated",

product

});



}catch(error){


res.status(500).json({

message:error.message

});


}



});






// Delete Product


router.delete("/products/:id",async(req,res)=>{


try{


const product = await Product.findByPk(
    req.params.id
);



if(!product){


return res.status(404).json({

message:"Product not found"

});


}



await product.destroy();



res.json({

message:"Product deleted"

});



}catch(error){


res.status(500).json({

message:error.message

});


}



});






// Stock Update


router.patch("/products/:id/stock",
async(req,res)=>{


try{


const product = await Product.findByPk(
    req.params.id
);



await product.update({

stock:req.body.stock

});



res.json({

message:"Stock updated",

stock:product.stock

});



}catch(error){


res.status(500).json({

message:error.message

});


}


});





module.exports = router;
