const express = require('express');
const router = express.Router();
const tag = require('../api/controller/tagcontroller')


 router.get('/', tag.getTags);
 router.post('/', tag.addTag);
 router.put('/:id',tag.tagUpdate );
 router.get('/:id', tag.getTagsId);
 router.delete('/:id', tag.tagDelete);

  // routes.get('/find',tag.createfind);
 

module.exports = router;