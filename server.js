
const express = require('express');
require('dotenv').config();

const app = express();
const mongoose = require('mongoose');
// const Student = require('./Models/student')
// const Teacher = require('./Models/teacher')
// const Subject=require("./Models/subject.js");
// const Room=require("./Models/room.js")
// const Timeslots=require("./Models/timeSlots.js")
// const{ connectDb} = require('./utils/dbConnect')
const cookieparser  = require('cookie-parser')
const Class = require('./Models/class')
// const teacherRoute = require('./router/teacherRoute')
 const studentRoute = require('./router/studentRoute.js')
// const loginRoute = require('./router/loginRoute')
const adminDashBoard = require('./router/adminDashBoard')
app.use(cookieparser());
app.use(express.json())
app.use(express.urlencoded({extended:true}))


connectDb().
then(()=>{
    console.log(`Db connected successfully`)
}).catch((err)=>{
    console.log('errror occur during db connnection',err);
    
})

async function connectDb(){
            await mongoose.connect(process.env.MONGO_URI)
}

// app.get('/addclasses',async (req,res)=>{
//     try{
//         Class.insertMany([{
//     "className": "BCA 1st Year"
//   },
//   {
//     "className": "BCA 2nd Year"
//   },
//   {
//     "className": "BCA 3rd Year"
//   },
//   {
//     "className": "MCA 1st Year"
//   },
//   {
//     "className": "MCA 2nd Year"
//   }]
// )
// console.log('added class successfully');

//   const Admin = new Teacher({
//         teacherName:'administration',
//         email:'administration@gmail.com',
//         role:'Admin',
//         password:"admin@1234"
//     })
//     await Admin.save();
//     console.log('save successfully');
//     res.send("Data saved")
    
//     }catch(err){
//         console.log('error occur during creating schema' + err.message);
        
        
//     }
// })

// app.get("/addslots",async(req,res)=>{
//     try{

//        const classes= await Class.find({
//         className:{
//             $in:[
//                  "BCA 1st Year",
//             "BCA 2nd Year",
//             "BCA 3rd Year",
//             "MCA 1st Year",
//             "MCA 2nd Year"
//        ]}
//     })

//     const slots = [
//     { startTime: "9:00 AM", endTime: "9:50 AM" },
//     { startTime: "9:50 AM", endTime: "10:40 AM" },
//     { startTime: "11:00 AM", endTime: "11:50 AM" },
//     { startTime: "11:50 AM", endTime: "12:40 PM" },
//     { startTime: "12:40 PM", endTime: "1:30 PM" },
//     { startTime: "1:30 PM", endTime: "2:20 PM" },
//     { startTime: "2:20 PM", endTime: "3:10 PM" },
//     { startTime: "3:10 PM", endTime: "4:00 PM" }
// ];


// const timeslots=[];
// for(classData of classes){
//     for(slot of slots){

//         timeslots.push({
//               startTime: slot.startTime,
//             entTime: slot.endTime,
//             status: "available",
//             class: classData._id
//         })
//     }
// }

// await Timeslots.insertMany(timeslots);
// res.send("added timeslots");
//     }catch(err){
//         console.log("Error in adding slots",err);
//     }
// })




// app.get('/add1yearsubject',async(req,res)=>{
//     try {
//         const secondyearclass =await Class.findOne({className:"MCA 2nd Year"});
//         console.log(secondyearclass._id);
        
//         await Subject.insertMany( [
//     {
//         subjectName: "Software Engineering",
//         classId: secondyearclass._id
//     },
//     {
//         subjectName: "Web Technologies",
//         classId: secondyearclass._id
//     },
//     {
//         subjectName: "Artificial Intelligence",
//         classId: secondyearclass._id
//     },
//     {
//         subjectName: "Cloud Computing",
//         classId: secondyearclass._id
//     },
//     {
//         subjectName: "Cyber Security",
//         classId: secondyearclass._id
//     }
// ])
        
//         res.send(secondyearclass)
        
//     } catch (err) {
//         console.log(err.message);
        
//     }
    
// })
// app.use('/teacher', teacherRoute);
 app.use('/student', studentRoute);
// app.use('/login', loginRoute);

app.use('/admin', adminDashBoard);


app.use((err,req,res,next)=>{
const {statuscode=400,message='someThing went wrong'} = err;
 res.status(statuscode).json({message});
})

//testing slots

// app.post("/testingSlots",async (req,res)=>{
//     try{
//         const {startTime,endTime,className}=req.body;
//         const classData=await Class.findOne({className:className})
//         const slots=await Timeslots.findOne({class:classData._id});

//         if(!slots){
//           return  res.send("Wrong slot choosen");
//         }

//         if(slots.status=="available"){
//             return res.send("Slot alloted");
//         }
//     }catch(err){
//         res.send("Error occured in slot allocation",err);
//     }

        
// })


app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on port ${process.env.PORT}`);
    
})