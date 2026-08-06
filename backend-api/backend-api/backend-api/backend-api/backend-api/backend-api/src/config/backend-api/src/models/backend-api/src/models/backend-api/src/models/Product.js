const { DataTypes } = require("sequelize");

const { sequelize } = require("../config/database");


const Product = sequelize.define(
    "Product",
    {


        id: {

            type: DataTypes.INTEGER,

            autoIncrement: true,

            primaryKey: true

        },


        categoryId: {

            type: DataTypes.INTEGER,

            allowNull: false

        },


        name: {

            type: DataTypes.STRING,

            allowNull: false

        },


        slug: {

            type: DataTypes.STRING,

            unique: true

        },


        description: {

            type: DataTypes.TEXT,

            allowNull: true

        },


        image: {

            type: DataTypes.STRING,

            allowNull: true

        },


        price: {

            type: DataTypes.FLOAT,

            allowNull: false

        },


        discountPrice: {

            type: DataTypes.FLOAT,

            allowNull: true

        },


        stock: {

            type: DataTypes.INTEGER,

            defaultValue: 0

        },


        productType: {

            type: DataTypes.ENUM(
                "regular",
                "fresh",
                "custom"
            ),

            defaultValue: "regular"

        },


        deliveryType: {

            type: DataTypes.ENUM(
                "one_time",
                "daily",
                "scheduled"
            ),

            defaultValue: "one_time"

        },


        unit: {

            type: DataTypes.STRING,

            allowNull: true

        },


        isFeatured: {

            type: DataTypes.BOOLEAN,

            defaultValue: false

        },


        status: {

            type: DataTypes.BOOLEAN,

            defaultValue: true

        }


    },


    {

        timestamps: true

    }

);


module.exports = Product;
