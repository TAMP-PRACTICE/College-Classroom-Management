const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');

// const{ connectDb} = require('./utils/dbConnect')
const cookieparser  = require('cookie-parser')
// const teacherRoute = require('./router/teacherRoute')
// const studentRoute = require('./router/studentRoute')
// const loginRoute = require('./router/loginRoute')
// const adminDashBoard = require('./router/adminDashBoard')
app.use(cookieparser());
app.use(express.json())
app.use(express.urlencoded({extended:true}))


connectDb().
then(()=>{
    console.log(`Db connected successfully`)
}).catch((err)=>{
    console.log('errror occur during db connnection');
    
})

async function connectDb(){
            await mongoose.connect(process.env.MONGO_URI)
}

app.get('/',(req,res)=>{
    res.json({message:'this is home page'});
    
})
// app.use('/teacher', teacherRoute);
// app.use('/student', studentRoute);
// app.use('/login', loginRoute);
// app.use('/admin', adminDashBoard);


app.use((err,req,res,next)=>{
const {statuscode=400,message='someThing went wrong'} = err;
 res.status(statuscode).json({message});
})
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on port ${process.env.PORT}`);
    
})