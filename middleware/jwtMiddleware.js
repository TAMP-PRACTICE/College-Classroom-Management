const jwt=require("jsonwebtoken");
const secretKey=process.env.secretKey;

const jwtStudentMiddleware=async(req,res,next)=>{

    const studentLoginToken=req.cookies.studentLoginToken;

    if(!studentLoginToken){
        res.status(404).send("Login required");
    }

    try{
        const student=jwt.verify(studentLoginToken,secretKey);

        if(!student){
            return res.status(401).send("session expired");
        }

        req.studentLogin=student;
        console.log("Login Token verified");
        next();

    }catch(err){
        console.log("Error occured in jwt of student login",err);
            res.status(500).send("Error occured in jwt of student login");
    }
}

const jwtTeacherMiddleware=async(req,res,next)=>{
    
    const teacherLoginToken=req.cookies.teacherLoginToken;

    if(!teacherLoginToken){
        return res.status(404).send("Login required first ")
    }

    try{
        const teacherToken=jwt.verify(teacherLoginToken,secretKey);
        
        if(!teacherToken){
           return res.status(500).send("Login session is expired");
        }
        console.log("Login token verified",teacherToken);
        req.teacherLogin=teacherToken;
        next();
    }catch(err){
        console.log("Error occured in jwt token verfication in teacher",err);
        res.status(500),send("Error occured in jwt token verification");
    }
}

module.exports={jwtStudentMiddleware,jwtTeacherMiddleware};