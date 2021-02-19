const userModel = require('../models/users.model');

exports.postNewUsers = async(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");

    const newUser = new userModel({
        firstname:req.body.firstname,
        surname:req.body.surname,
        email:req.body.email,
        password:req.body.password
    });

    
}