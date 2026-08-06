const router = require("express").Router();


const { Product, Category } = require("../models");



// Get All Products

router.get("/", async (req, res) => {


    try {


        const products = await Product.findAll({

            include: [

                {

                    model: Category,

                    attributes: [
                        "id",
                        "name"
                    ]

                }

            ]

        });


        res.json(products);



    } catch (error) {


        res.status(500).json({

            message: error.message

        });


    }


});





// Get Single Product


router.get("/:id", async (req, res) => {


    try {


        const product = await Product.findByPk(

            req.params.id,

            {

                include: [

                    {

                        model: Category,

                        attributes:[
                            "id",
                            "name"
                        ]

                    }

                ]

            }

        );



        if(!product){


            return res.status(404).json({

                message:"Product not found"

            });


        }



        res.json(product);



    } catch(error){


        res.status(500).json({

            message:error.message

        });


    }


});





module.exports = router;
