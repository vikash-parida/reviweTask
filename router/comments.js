const express = require('express');
const routes = express.Router();
const comments = require('../controller/comments');


routes.get('/', comments.getcomments);
routes.post('/', comments.addcomments);
routes.put('/:id', comments.updatecomments);
routes.get('/:id', comments.getByIdcomments);
routes.delete('/:id', comments.deletemassage);


module.exports = routes;     