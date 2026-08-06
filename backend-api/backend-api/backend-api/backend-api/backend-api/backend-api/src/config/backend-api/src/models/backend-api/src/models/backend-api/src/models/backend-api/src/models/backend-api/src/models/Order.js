const { DataTypes } = require("sequelize");

const { sequelize } = require("../config/database");


const Order = sequelize.define(
    "Order",
    {


        id: {

            type: DataTypes.INTEGER,

            autoIncrement: true,

            primaryKey: true

        },


        userId: {

            type: DataTypes.INTEGER,

            allowNull: false

        },


        orderNumber: {

            type: DataTypes.STRING,

            unique: true,

            allowNull: false

        },


        totalAmount: {

            type: DataTypes.FLOAT,

            allowNull: false

        },


        paymentMethod: {

            type: DataTypes.ENUM(
                "cod",
                "bkash",
                "nagad",
                "rocket",
                "bank"
            ),

            defaultValue: "cod"

        },


        paymentStatus: {

            type: DataTypes.ENUM(
                "pending",
                "verified",
                "failed"
            ),

            defaultValue: "pending"

        },


        orderStatus: {

            type: DataTypes.ENUM(
                "received",
                "processing",
                "packed",
                "shipped",
                "out_for_delivery",
                "delivered",
                "cancelled"
            ),

            defaultValue: "received"

        },


        deliveryAddress: {

            type: DataTypes.TEXT,

            allowNull: false

        },


        customerNote: {

            type: DataTypes.TEXT,

            allowNull: true

        }


    },


    {

        timestamps:true

    }

);


module.exports = Order;
