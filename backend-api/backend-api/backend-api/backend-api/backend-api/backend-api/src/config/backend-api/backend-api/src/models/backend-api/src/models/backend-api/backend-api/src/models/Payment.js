const { DataTypes } = require("sequelize");

const { sequelize } = require("../config/database");


const Payment = sequelize.define(
    "Payment",
    {


        id: {

            type: DataTypes.INTEGER,

            autoIncrement:true,

            primaryKey:true

        },


        orderId: {

            type: DataTypes.INTEGER,

            allowNull:false

        },


        method: {

            type: DataTypes.ENUM(
                "cod",
                "bkash",
                "nagad",
                "rocket",
                "bank"
            ),

            defaultValue:"cod"

        },


        transactionId: {

            type: DataTypes.STRING,

            allowNull:true

        },


        amount: {

            type: DataTypes.FLOAT,

            allowNull:false

        },


        status: {

            type: DataTypes.ENUM(
                "pending",
                "verified",
                "rejected"
            ),

            defaultValue:"pending"

        }


    },


    {

        timestamps:true

    }

);


module.exports = Payment;
