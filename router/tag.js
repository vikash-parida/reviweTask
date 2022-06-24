const express = require('express');
const routes = express.Router();
const tag = require('../api/controller/tagcontroller')


 routes.get('/', tag.getTags);

 routes.post('/', tag.addTag);

 routes.put('/:id',tag.tagUpdate );

 routes.get('/:id', tag.getTagsId);

 routes.delete('/:id', tag.tagDelete);

  // routes.get('/find',tag.createfind);
 

module.exports = routes;