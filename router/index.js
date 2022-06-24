const express = require('express');
const router = express.Router();

const user = require('./user');
const profile = require('./profile');
const comments = require('./comments');
const tag = require('./tag');

router.use('/user',user);
router.use('/profile',profile);
router.use('/comments',comments);
router.use('/tag',tag);

module.exports = router ;

