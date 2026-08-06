const { DataTypes } = require("sequelize");

const { sequelize } = require("../config/database");


const Subscription = sequelize.define(
    "Subscription",
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


        productId: {

            type: DataTypes.INTEGER,

            allowNull: false

        },


        quantity: {

            type: DataTypes.STRING,

            allowNull: false

        },


        frequency: {

            type: DataTypes.ENUM(
                "daily",
                "weekly",
                "monthly"
            ),

            defaultValue: "daily"

        },


        startDate: {

            type: DataTypes.DATEONLY,

            allowNull: false

        },


        nextDeliveryDate: {

            type: DataTypes.DATEONLY,

            allowNull: true

        },


        status: {

            type: DataTypes.ENUM(
                "active",
                "paused",
                "cancelled"
            ),

            defaultValue: "active"

        },


        deliveryNote: {

            type: DataTypes.TEXT,

            allowNull: true

        }


    },


    {

        timestamps:true

    }

);


module.exports = Subscription;
