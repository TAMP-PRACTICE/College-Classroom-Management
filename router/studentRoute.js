const express = require('express');
const router = express.Router();
const {studentLogin,forgetPassword,resetPassword}=require("../controller/studentController.js")

//router.post('/register',studentRegister)

router.post('/login',studentLogin);

router.post('/forgetPassword',forgetPassword)

router.post('/resetPassword/:token',resetPassword)

// router.put('/:id',)
module.exports = router;