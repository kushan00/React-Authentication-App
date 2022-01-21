const express = require('express');
const User = require('../models/User');

const app = express.Router();



//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
                
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
});

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
});


app.put('/user/update/:id',(req,res)=>{

    User.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,user)=>{
            if(err){
                return res.status(400).json({error:err});
            }

             return res.status(200).json({
                success:"Updated SuccessFull!"
            });
        });
});

module.exports = app;