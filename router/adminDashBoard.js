const express = require('express');
const router = express.Router();
const {RegisterStudent} = require('../controller/adminDashBoardController')

router.get('/',RegisterStudent)

module.exports = router;