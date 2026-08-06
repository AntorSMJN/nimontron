const { DataTypes } = require("sequelize");

const { sequelize } = require("../config/database");


const Category = sequelize.define(
    "Category",
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


        status: {

            type: DataTypes.BOOLEAN,

            defaultValue: true

        }


    },


    {

        timestamps: true

    }

);


module.exports = Category;
