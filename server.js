
const express = require('express');
require('dotenv').config();

const app = express();
const mongoose = require('mongoose');

const cookieparser  = require('cookie-parser')
app.use(cookieparser());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//routes
 const teacherRoute = require('./router/teacherRoute')
 const studentRoute = require('./router/studentRoute.js')
const adminDashBoard = require('./router/adminDashBoard');



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


app.use((err,req,res,next)=>{
const {statuscode=400,message='someThing went wrong'} = err;
 res.status(statuscode).json({message});
})




app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on port ${process.env.PORT}`);
    
})




