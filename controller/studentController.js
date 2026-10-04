const Student = require("../Models/student.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const transporter = require("../config/nodemailer.js");
const crypto = require("crypto");
const secretKey=process.env.secretKey;

const studentLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const getStudent = await Student.findOne({ email: email });

    if (!getStudent) {
      return res.status(404).send("Student not Found");
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      getStudent.password,
    );
    if (!isPasswordCorrect) {
      return res.status(401).send("Wrong Password");
    }

    const token = jwt.sign({ email: email }, secretKey, { expiresIn: 200 });
    res.cookie("studentLoginToken", token, { maxAge: 40000 });
    return res.send("Student Login successfully");
  } catch (err) {
    console.log("Error occured in student Login", err);
    res.status(500).send("Server Error");
  }
};

const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const student =await Student.findOne({ email: email });
    if(!student){
     return res.status(404).json({"message" :"user not found"})
    }
    const resetPasswordToken = crypto.randomBytes(Number(process.env.SALT_ROUND)).toString("hex");
    const resetPasswordTime = Date.now() + 10 * 60 * 1000;
    student.resetPasswordToken = resetPasswordToken;
    student.resetPasswordTime = resetPasswordTime;
   await student.save();
    const resetLink = `http://localhost:3000/student/resetPassword/${resetPasswordToken}`;
    const info = await transporter.sendMail({
      from: process.env.SenderMail,
      to: req.body.email,
      subject: "forget Psssword Request From CampusSync ",
      text: "", // plain text body
      html: `
    <h2>Hello Dear ! </h2>
    <p>hey ! this Mail is Regarding your Forget Password request if you make this request click the Below Given button</p>
    <
    <a href='${resetLink}'> Reset Password</a>

    <br>
    <br>

    <p>if you don't request for forget password. ignore this mail</>

    
    
    `,
    });

    console.log("Message sent: %s", info.messageId);
    // Preview URL is only available when using an Ethereal test account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (err) {
    console.error("Error while sending mail:", err);
  }
};


const resetPassword = async(req,res)=>{
    try{
    const {token} = req.params;
    const {newPassword} = req.body;
    const student =await Student.findOne({
        resetPasswordToken  : token,
        resetPasswordTime :{ $gt : Date.now()}
    })
  if (!student) {
    return res.status(400).json({ message: "Invalid or expired token" });
  }else{
    student.password = await bcrypt.hash(newPassword, Number(process.env.SALT_ROUND));
    student.resetPasswordToken = undefined;
    student.resetPasswordTime = undefined;
    await student.save();
     
  }
} catch (error) {
  console.error("Password reset error:", error);
  res.status(500).json({ message: "Internal server error", error: error.message });
}

};

module.exports = { studentLogin, forgetPassword,resetPassword };
