
const express = require('express');
const router = express.Router();
const {bookSlot,teacherLogin,teacherDashboard}=require("../controller/teacherController.js");

const {jwtTeacherMiddleware}=require("../middleware/jwtMiddleware.js")

//router.post('/register',teacherRegister)
router.post('/login',teacherLogin);
router.post("/bookslot",bookSlot);
router.get("/teacherDashboard/:id",jwtTeacherMiddleware,teacherDashboard);
module.exports = router;

