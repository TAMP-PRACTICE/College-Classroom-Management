const express = require('express');
const router = express.Router();
const {bookSlot,teacherLogin}=require("../controller/teacherController.js")

//router.post('/register',teacherRegister)
router.post('/login',teacherLogin);
router.post("/bookslot",bookSlot);

module.exports = router;

