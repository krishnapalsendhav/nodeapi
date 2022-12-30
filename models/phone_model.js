const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const phoneSchema = mongoose.Schema(
    {
        battery : {
            type : Number
        },
        camera : {
            type : Number
        },
        display : {
            type : Number
        },
        ram : {
            type : Number
        },
        rom : {
            type : Number
        },
        processor : {
            type : String
        },
        color : {
            type : String
        },
        product_name : {
            type : String
        },
        product_image : {
            type : String
        },
        product_price : {
            type : Number
        },
        product_weight : {
            type : Number
        },
        product_url : {
            type : String
        },


    }
);
module.exports = mongoose.model('Phone',phoneSchema);