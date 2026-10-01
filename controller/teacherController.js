const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const secretKey=process.env.secretKey;
const Student = require("../Models/student.js")
const Teacher = require('../Models/teacher.js')
const Subject=require("../Models/subject.js");
const Room=require("../Models/room.js")
const Timeslots=require("../Models/timeSlots.js")
const Schedule=require("../Models/schedule.js");


const teacherLogin=async(req,res)=>{

    const {email,password}=req.body;

    try{
        const getTeacher=await Teacher.findOne({email:email});

        if(!getTeacher){
           return res.status(404).send("Teacher not registered");
        }

        const isPasswordCorrect=await bcrypt.compare(password,
                                        getTeacher.password);
        
            if(!isPasswordCorrect){

                return res.status(401).send("Wrong password");
            }

            const token=jwt.sign({email:email},secretKey,{expiresIn:200});
            res.cookie("teacherLoginToken",token,{maxAge:40000});
            res.status(200).send("Teacher logged in successfully");
            }catch(err){
        console.log("Error occured in teacher login",err);
        res.status(500).send("Error occured in teacher login");
    }

}


//testing slots

const bookSlot=async (req,res)=>{
    try{
        const {startTime,endTime,className,teacherName,subjectName}=req.body;
        const classData=await Class.findOne({className:className})
        const slots=await Timeslots.findOne({startTime:startTime,classId:classData._id});
        const teach=await Teacher.findOne({teacherName:teacherName});
        const subject=await Subject.findOne({subjectName:subjectName});

        console.log(subject.classId,classData._id);

        //subject matching with class 
         if(!subject.classId.equals(classData._id))
            {
                return res.send('Wrong class your subject is not available in this class')
            }


        if(!slots){
          return  res.send("Wrong slot choosen");
        }

        if(slots.status=="available"){
            //check available rooms
            const rooms=await Room.find({status:"available"});
            if(rooms.length==0)
            {
                return res.send("Sorry no room is available for the slot time ")
            }
            const allocatedRoom=rooms[0];
          

            //teacher subject finding

            await Room.updateOne({_id:allocatedRoom._id},{$set:{status:'occupied'}});
            await Timeslots.updateOne({_id:slots._id},{$set:{status:"occupied"}})
            //saving data in schedule
            const today=new Date();
            const scheduleData={
                classId:classData._id,
                date:Date.now(),
                timeSlot:slots._id,
                room:allocatedRoom._id,
                subject:subject._id,
                teacher:teach._id,
                day:today.toLocaleDateString("en-US",{weekday:"long"})
            }
            await Schedule.insertOne(scheduleData);
            return res.send(`Slot alloted and room and allocated room is ${allocatedRoom.roomNumber}  `);
        }

        return res.send("Slot already occupied please try another slot")
        }catch(err){
        console.log("Error in time slots allocation",err)
        res.send("Error occured in slot allocation");
    }      
}

module.exports={teacherLogin,bookSlot};









