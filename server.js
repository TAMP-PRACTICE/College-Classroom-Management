const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);
const express = require('express');
require('dotenv').config();
const cron=require("node-cron");

const app = express();
const mongoose = require('mongoose');

const cookieparser  = require('cookie-parser')
const cors=require("cors");
app.use(cookieparser());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
//routes
 const teacherRoute = require('./router/teacherRoute')
 const studentRoute = require('./router/studentRoute.js')
const adminDashBoard = require('./router/adminDashBoard');
const Schedule=require("./Models/schedule.js");
const Timeslots=require("./Models/timeSlots.js");
const Room=require("./Models/room.js");
const Class=require("./Models/class.js")



connectDb().
then(()=>{
    console.log(`Db connected successfully`)
}).catch((err)=>{
    console.log('errror occur during db connnection' + err.message);
    console.log('errror occur during db connnection',err);    
})
async function connectDb(){
            await mongoose.connect(process.env.MONGO_URI)
}
app.use('/teacher', teacherRoute);
 app.use('/student', studentRoute);
// app.use('/login', loginRoute);
app.use('/admin', adminDashBoard);

cron.schedule("* * * * *",async()=>{
    
    try{
    const scheduleData=await Schedule.find();
    if(!scheduleData){
        return console.log("Returning");
    }
    for(schedule of scheduleData){
        console.log(schedule);
        const data=await Timeslots.findOne({_id:schedule.timeSlot});
        console.log(data);
       const [time, modifier] = data.endTime.split(" ");

        let [hours, minutes] = time.split(":").map(Number);

        if (modifier === "PM" && hours !== 12) hours += 12;
        if (modifier === "AM" && hours === 12) hours = 0;

        const endMinutes = hours * 60 + minutes;

        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();

        if (currentMinutes >= endMinutes) {
        await Room.updateOne(
        { _id: schedule.room },
        { $set: { status: "available" } }
    );

    console.log("Room is made available now");
}
    }
    }catch(err){
        console.log(err);
}
})


app.use((err,req,res,next)=>{
const {statuscode=400,message='someThing went wrong'} = err;
 res.status(statuscode).json({message});
})
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on port ${process.env.PORT}`);
    
})




