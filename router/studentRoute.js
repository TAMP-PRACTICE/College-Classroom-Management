const express = require('express');
const router = express.Router();


router.post('/register',studentRegister)

router.post('/login',studentLogin);

router.put('/:id',)
module.exports = router;