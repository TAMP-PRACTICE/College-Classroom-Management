const jwt=require("jsonwebtoken");
const secretKey=process.env.secretKey;

const jwtStudentMiddleware=async(req,res,next)=>{

    const studentLoginToken=req.cookies.studentLoginToken;

    if(!studentLoginToken){
        res.status(500).send("Login required");
    }

    try{
        const student=jwt.verify(studentLoginToken,secretKey);
        req.studentLogin=student;
        console.log("Login Token verified");
        next();

    }catch(err){
            res.status(404).send("Login expired");
    }
}

module.exports={jwtStudentMiddleware};