const { DataTypes } = require("sequelize");

const { sequelize } = require("../config/database");


const User = sequelize.define(
    "User",
    {

        id: {

            type: DataTypes.INTEGER,

            autoIncrement: true,

            primaryKey: true

        },


        name: {

            type: DataTypes.STRING,

            allowNull: false

        },


        phone: {

            type: DataTypes.STRING,

            unique: true,

            allowNull: false

        },


        email: {

            type: DataTypes.STRING,

            unique: true,

            allowNull: true

        },


        password: {

            type: DataTypes.STRING,

            allowNull: false

        },


        address: {

            type: DataTypes.TEXT,

            allowNull: true

        },


        role: {

            type: DataTypes.ENUM(
                "customer",
                "admin",
                "delivery"
            ),

            defaultValue: "customer"

        },


        language: {

            type: DataTypes.STRING,

            defaultValue: "bn"

        }

    },


    {

        timestamps: true

    }

);


module.exports = User;
