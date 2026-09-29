const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const Student = require('./Models/student')
const Teacher = require('./Models/teacher')
const cookieparser  = require('cookie-parser')
const Class = require('./Models/class')
// const teacherRoute = require('./router/teacherRoute')
const Subject = require('./Models/subject')
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
    console.log('errror occur during db connnection' + err.message);
    
})

async function connectDb(){
            await mongoose.connect(process.env.MONGO_URI)
}

app.get('/addclasses',async (req,res)=>{
    try{
    Class.insertMany([{
    "className": "BCA 1st Year"
  },
  {
    "className": "BCA 2nd Year"
  },
  {
    "className": "BCA 3rd Year"
  },
  {
    "className": "MCA 1st Year"
  },
  {
    "className": "MCA 2nd Year"
  }]
)
console.log('added class successfullyyyyyyyyy');

//   const Admin = new Teacher({
//         teacherName:'administration',
//         email:'administration@gmail.com',
//         role:'Admin',
//         password:"admin@1234"
//     })
//     await Admin.save();
//     console.log('save successfully');
    
    }catch(err){
        console.log('error occur during creating schema' + err.message);
        
        
    }
})

app.get('/add1yearsubject',async(req,res)=>{
    try {
        const firstyearclass =await Class.findOne({"className": "BCA 1st Year"});
        console.log(firstyearclass._id);
        console.log('hello');
       
       Subject.insertMany([
  {
    subjectName: "Programming in C",
    classId: firstyearclass._id
  },
  {
    subjectName: "Computer Fundamentals",
    classId: firstyearclass._id 
  },
  {
    subjectName: "Mathematics-I",
    classId: firstyearclass._id
  },
  {
    subjectName: "Digital Electronics",
    classId: firstyearclass._id
  },
  {
    subjectName: "Communication Skills",
    classId: firstyearclass._id
  }
]);
        
    } catch (err) {
        console.log(err.message);
        
    }
    
})
// app.use('/teacher', teacherRoute);
 app.use('/student', studentRoute);
// app.use('/login', loginRoute);

app.use('/admin', adminDashBoard);


app.use((err,req,res,next)=>{
const {statuscode=400,message='someThing went wrong'} = err;
 res.status(statuscode).json({message});
})
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on port ${process.env.PORT}`);
    
})