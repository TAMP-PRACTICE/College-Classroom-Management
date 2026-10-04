const express = require('express');
const router = express.Router();
const {RegisterStudent,RegisterTeacher} = require('../controller/adminDashBoardController')

router.post('/studentRegister',RegisterStudent);

router.post("/teacherRegister",RegisterTeacher)


module.exports = router;