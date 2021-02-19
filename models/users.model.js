const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Email is required"],
        trim:true
    },
    fullname:{
        type:String,
        required:[true,"Full Name is required"],
        trim:true
    },
    username:{
        type:String,
        required:[true,"Username is required"],
        trim:true
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        trim:true
    },

});

const userModel = mongoose.model('UserModel',UserSchema);

module.exports = userModel;