const mongoose = require("mongoose");
const validator = require('validator');


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid");
            }
        }
    },
    moblie:{
        type:String,
        required:true,
        minlength:6000000000,
        maxlength:9999999999,
    },
    image:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    is_admin:{
        type:Number,
        required:false
    },
    is_verified:{
        type:Number,
        default:0
},
});

const user = new mongoose.Model("User",userSchema);

module.exports = user;