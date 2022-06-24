const express = require('express');
const router = express.Router();
const user = require('../api/controller/usercontroller')
 const errorHandel = require('../api/middleware/errorHandle')


router.get('/',user.getUsers);
router.post('/',user.AddUser);
router.put('/:id',user.updateuser);
router.get('/:id',user.getById);
router.delete('/:id',user.deleteusers);





module.exports = router;