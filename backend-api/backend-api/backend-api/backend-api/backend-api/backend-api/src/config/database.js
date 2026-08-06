const { Sequelize } = require("sequelize");

require("dotenv").config();


const sequelize = new Sequelize(
    process.env.DATABASE_URL,
    {
        dialect: "postgres",
        logging: false
    }
);


const connectDatabase = async () => {

    try {

        await sequelize.authenticate();

        console.log(
            "Nimontron Database Connected Successfully"
        );

    } catch (error) {

        console.log(
            "Database Connection Failed:",
            error.message
        );

    }

};


module.exports = {
    sequelize,
    connectDatabase
};
