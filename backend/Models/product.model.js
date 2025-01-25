import mongoose from "mongoose";
const productschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
}, {
    timestamps: true, //createat, updateat
    collection: 'products'
});

const product = mongoose.model('Product', productschema)

export default product;




