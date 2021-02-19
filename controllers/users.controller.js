const userModel = require('../models/users.model');
const bcrypt = require('bcrypt');

exports.postNewUsers = async(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");

    const emailExists = await userModel.findOne({email:req.body.email});

    if(emailExists){
        res.status(400).json("Email already exists");
    }else{
        const newUser = new userModel({
            fullname:req.body.fullname,
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        });

        newUser.save()
        .then(data => res.status(201).json("User created succesfful"))
        .catch(err => res.status(404).json({err}))
    }
}


exports.getAllUsers = async(req,res)=>{
    try {
        const users = await userModel.find();
        res.status(200).json({"users":users})
    } catch (error) {
        res.status(404).json({error})
    }
}

// @desc      DELETE all users 
// @route     DELETE /api/v1/users
// @access    public
exports.deleteUsers = async(req,res)=>{
    try {
        const users = await userModel.deleteMany();
        res.status(200).json({"users":users});
    } catch (error) {
        res.status(404).json({error})
    };
};