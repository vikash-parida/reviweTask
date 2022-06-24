const express = require('express');
const router = express.Router();

const adduser = require('./user');
const updateuser = require('./user')


router.use('/user',adduser);
router.use('/updateuser',updateuser);


module.exports = router;


