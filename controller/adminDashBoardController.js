const Student = require('../Models/student')
require('dotenv').config()
const bcrypt = require('bcrypt')
const Class=require("../Models/class.js");
const Subject=require("../Models/subject.js");
module.exports.RegisterStudent = async (req, res) => {
    try {

        const { studentName, email, classId , subject, rollNo, password } = req.body;
        const isAlreadyRegister =await Student.findOne({email});

        if(isAlreadyRegister)return res.status(403).json({message:'This emai is already registered'})
        const hashedPassword =await bcrypt.hash(password,Number(process.env.SALT_ROUND))
        const newStudent = new Student({
            studentName,
            email, 
            rollNo,
            password: hashedPassword
        })
       const classs =  await Class.findOne({ className: classId });
       const studentSubject = await Subject.findOne({ subjectName: subject, classId: classs._id });
       if(!studentSubject){
        return res.status(404).json({message:'This subject is not available for this class'})
       }
       newStudent.subject = studentSubject._id;
       newStudent.classId = classs._id;
        console.log('after student instance')

       
       await newStudent.save();
       res.status(200).send("student added successfully")
    } catch (err) {
        console.log(err);

       res.status(401).send("Issue in adding student ")
        
    }
}