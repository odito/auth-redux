
const mongoose = require('mongoose');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = require('../models/userModel');


// register
router.post('/register',async (req, res)=>{
   
    try {
      
    const {name, email, password}= req.body
    
   if(!name || !email || !password){
       return res.status(400).json({msg:"Please fill all the fields"})
   }

 const user = await userSchema.findOne({email});
 if(user){
     return res.status(400).json({msg:"User already exists"})
 }

 const salt = await bcrypt.genSalt(10);

 const passwordHashed = await bcrypt.hash(password,salt);

 const newUser = await new userSchema({
     name,
     email,
     password:passwordHashed
 })

 newUser.save();

 res.json(newUser)




   if(password.length <3){
    return res.status(400).json({msg:"Password must have at least 3 characters"})
}






   res.json({msg:"success"})
    } catch (err) {
        
    }






})






// login
router.post('/login',async (req, res)=>{
  const {email, password} = req.body
  if(email.length===0 || password.length===0){
      return res.status(400).json({msg:"Please fill all the fields"})
  }

//   we want to search user ,according to the data that putted in register

const user = await userSchema.findOne({email});

if(!user){
    return res.status(400).json({msg:"User does not exist,go to register"})
}

// we want to compare the existing password that already created in register, with the password that we put in log in

const match = await bcrypt.compare(password,user.password);

if(!match){
    return res.status(400).json({msg:"Incorrect password"})
}

// if login success ,create token
const payload = {id:user._id, name:user.name}
const token =jwt.sign(payload,process.env.JWT_SECRET,{
    expiresIn:"1d"
})

res.json({
    token,
    user:{
        name:user.name,
        email:user.email,
        id:user._id
    }
})




})

module.exports = router;