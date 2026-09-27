const Student = require('../Models/student')
require('dotenv').config()
const bcrypt = require('bcrypt')
module.exports.RegisterStudent = async (req, res) => {
    try {
        const { studentName, email, subject, rollNo, password } = req.body;
        const hashedPassword =await bcrypt.hash(password,process.env.SALT_ROUND)
        const newStudent = new Student({
            studentName,
             email, 
             
             subject,
             rollNo,
             password: hashedPassword
        })
       await newStudent.save();
       res.status(200).send("student added successfully")
    } catch (err) {
       res.status(401).send("Issue in adding student ")
        
    }
}