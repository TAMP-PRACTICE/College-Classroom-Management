const express = require('express');
const router = express.Router();
const {RegisterStudent} = require('../controller/adminDashBoardController')

router.post('/',RegisterStudent)

module.exports = router;