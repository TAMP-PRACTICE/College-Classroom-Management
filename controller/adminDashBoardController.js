const Student = require('../Models/student')
require('dotenv').config()
const bcrypt = require('bcrypt')
const Class=require("../Models/class.js");
const Subject=require("../Models/subject.js");
module.exports.RegisterStudent = async (req, res) => {
    try {

        const { studentName, email, classId ,rollNo, password } = req.body;

        const isAlreadyRegister =await Student.findOne({email});

        if(isAlreadyRegister)return res.status(403).json({message:'This email is already registered'})

            console.log(typeof(process.env.SALT_ROUND));
        const hashedPassword =await bcrypt.hash(password,Number(process.env.SALT_ROUND))
        const newStudent = new Student({
            studentName,
             email, 
             rollNo,
             password: hashedPassword
        })
       const classs =  await Class.findOne({className: classId });
       newStudent.classId = classs._id;
        console.log('after student instance')

       
       await newStudent.save();
       res.status(200).send("student added successfully")
    } catch (err) {
        console.log(err);

       res.status(401).send("Issue in adding student ")
        
    }
}