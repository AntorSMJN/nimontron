const { sequelize } = require("../config/database");


const User = require("./User");

const Category = require("./Category");

const Product = require("./Product");

const Order = require("./Order");

const Subscription = require("./Subscription");

const Payment = require("./Payment");



// Category Product

Category.hasMany(Product,{
    foreignKey:"categoryId"
});


Product.belongsTo(Category,{
    foreignKey:"categoryId"
});



// User Order

User.hasMany(Order,{
    foreignKey:"userId"
});


Order.belongsTo(User,{
    foreignKey:"userId"
});



// User Subscription

User.hasMany(Subscription,{
    foreignKey:"userId"
});


Subscription.belongsTo(User,{
    foreignKey:"userId"
});



// Product Subscription

Product.hasMany(Subscription,{
    foreignKey:"productId"
});


Subscription.belongsTo(Product,{
    foreignKey:"productId"
});



// Order Payment

Order.hasOne(Payment,{
    foreignKey:"orderId"
});


Payment.belongsTo(Order,{
    foreignKey:"orderId"
});



module.exports={

    sequelize,

    User,

    Category,

    Product,

    Order,

    Subscription,

    Payment

};
