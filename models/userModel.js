const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    cart:{
        type:Array,
        default:[],
    },
    isAdmin:Boolean,
    orders:{
        type:Array,
        default:[],
    },
    contact:Number,
    pic:String,
     
})

module.exports = mongoose.model("user",userModel);