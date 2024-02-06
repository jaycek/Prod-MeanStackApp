const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URL)

//Schema definition

const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    productID:Number,
    productName:String,
    productCode:String,
    releaseDate:String,
    description:String,
    price:Number,
    starRating:Number,
    imageUrl:String
});

//Model creation
var ProductData = mongoose.model('products',ProductSchema);

module.exports = ProductData;