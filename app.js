const express = require("express");
const ProductData = require("./src/model/ProductData");
const bodyparser = require("body-parser");
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require("dotenv").config();
const port = process.env.PORT||8080;
const path=require('path');
const { MongoClient } = require('mongodb');

app.use(cors());
const client = new MongoClient(process.env.MONGODB_URL);


app.get('/',function(req,res){
    //res.send("API responds correctly.")
    res.sendFile(path.join(__dirname,'./Client/build/index.html'));
})

app.get('/products', function(req,res){

    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PUT,DELETE');
    ProductData.find().then(function(products){

       res.send(products) ;
    })
})

app.post('/insert',bodyparser.json(), function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PUT,DELETE');
   console.log(req.body);
    var product = {
        productID: req.body.product.productID,
    productName:req.body.product.productName,
    productCode:req.body.product.productCode,
    releaseDate: req.body.product.releaseDate,
    description:req.body.product.description,
    price: req.body.product.price,
    starRating: req.body.product.starRating,
    imageUrl: req.body.product.imageUrl
    }
    var product = new ProductData(product);
    product.save();
})

// client.connect(err => {
//     if(err){ console.error(err); return false;}
//     // connection to mongo is successful, listen for requests
//     app.listen(port, () => {
//         console.log("listening for requests");
//     })
// });

// app.listen(port,()=>{
//     console.log("Server started...")
// });

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGODB_URL);
      console.log(`MongoDB Connected: `);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
connectDB().then(() => {
    app.listen(port, () => {
        console.log("listening for requests on ",port);
    })
})