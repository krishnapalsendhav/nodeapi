const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        title : String,
        description : String,
        price : Number,
        discountedPercentage : Number,
        rating : Number,
        stock : Number,
        brand : String,
        category : String,
        thumbnail : String,
        images : Array,

    }
);
module.exports = mongoose.model('Product',productSchema);
