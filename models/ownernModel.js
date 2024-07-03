const mongoose = require('mongoose');

const ownerModel = mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    product:{
        type:Array,
        default:[],
    }, 
    pic:String,
    gstNum:String,
     
})

module.exports = mongoose.model("owner",ownerModel);