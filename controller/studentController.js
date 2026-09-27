const Student=require("../Models/student.js");
const jwt=require("jsonwebtoken");
require('dotenv').config();
const bcrypt=require("bcrypt");
const secretKey=process.env.secretKey;

const studentLogin=async(req,res)=>{

    const {email,password}=req.body;
    
    try{
        const getStudent=await Student.findOne({email:email});

        if(!getStudent){
            return res.status(404).send("Student not Found");
        }

        const isPasswordCorrect=await bcrypt.compare(password,getStudent.password);
         if (!isPasswordCorrect) {
            return res.status(401).send("Wrong Password");
        }

            const token=jwt.sign({email:email},secretKey,{expiresIn:200});
            res.cookie("studentLoginToken",token,{maxAge:40000})
            return res.send("Student Login successfully");
        
    }catch(err){
        console.log("Error occured in student Login",err);
        res.status(500).send("Server Error");
    }
    }


module.exports={studentLogin};