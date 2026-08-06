const router = require("express").Router();

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");


const { User } = require("../models");



// Register

router.post("/register", async (req, res) => {


    try {


        const {
            name,
            phone,
            email,
            password,
            address
        } = req.body;



        const existingUser = await User.findOne({
            where: {
                phone
            }
        });



        if (existingUser) {

            return res.status(400).json({

                message: "Phone number already registered"

            });

        }



        const hashedPassword = await bcrypt.hash(
            password,
            10
        );



        const user = await User.create({

            name,

            phone,

            email,

            password: hashedPassword,

            address

        });



        res.json({

            message:"Registration successful",

            userId:user.id

        });



    } catch(error){


        res.status(500).json({

            message:error.message

        });


    }


});





// Login


router.post("/login", async(req,res)=>{


    try{


        const {
            phone,
            password
        } = req.body;



        const user = await User.findOne({

            where:{
                phone
            }

        });



        if(!user){


            return res.status(404).json({

                message:"User not found"

            });


        }



        const match = await bcrypt.compare(

            password,

            user.password

        );



        if(!match){


            return res.status(401).json({

                message:"Invalid password"

            });


        }



        const token = jwt.sign(

            {
                id:user.id,

                role:user.role

            },

            process.env.JWT_SECRET,

            {
                expiresIn:"7d"
            }

        );



        res.json({


            message:"Login successful",


            token,


            user:{


                id:user.id,

                name:user.name,

                role:user.role


            }


        });



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }



});



module.exports = router;
