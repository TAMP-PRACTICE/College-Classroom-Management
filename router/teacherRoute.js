const express = require('express');
const router = express.Router();


router.post('/register',teacherRegister)

router.post('/login',teacherLogin);

module.exports = router;