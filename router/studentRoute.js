const express = require('express');
const router = express.Router();
const {studentLogin}=require("../controller/studentController.js")

//router.post('/register',studentRegister)

router.post('/login',studentLogin);

// router.put('/:id',)
module.exports = router;