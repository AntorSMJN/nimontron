const router = require("express").Router();


const { Order } = require("../models");



// Create New Order

router.post("/", async (req, res) => {


    try {


        const {

            userId,

            totalAmount,

            paymentMethod,

            deliveryAddress,

            customerNote

        } = req.body;



        const orderNumber =

            "NM" +

            Date.now();




        const order = await Order.create({

            userId,

            orderNumber,

            totalAmount,

            paymentMethod,

            deliveryAddress,

            customerNote

        });



        res.json({

            message:"Order created successfully",

            order

        });



    } catch(error){


        res.status(500).json({

            message:error.message

        });


    }


});





// Get Order By ID


router.get("/:id", async(req,res)=>{


    try{


        const order = await Order.findByPk(

            req.params.id

        );



        if(!order){


            return res.status(404).json({

                message:"Order not found"

            });


        }



        res.json(order);



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }



});





// Order Tracking Status


router.get(

"/:id/tracking",

async(req,res)=>{


    try{


        const order = await Order.findByPk(

            req.params.id

        );



        if(!order){


            return res.status(404).json({

                message:"Order not found"

            });


        }



        res.json({

            orderNumber:
            order.orderNumber,


            currentStatus:
            order.orderStatus,


            trackingSteps:[

                "Received",

                "Payment Verified",

                "Processing",

                "Packed",

                "Shipped",

                "Out For Delivery",

                "Delivered"

            ]

        });



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }


});





module.exports = router;
