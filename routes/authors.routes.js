const express = require('express');
// Rutas de productos
const authorsApiController = require("../controllers/authors.controller");
const authorsApiRouter = express.Router();

authorsApiRouter.get('/', authorsApiController.getAuthors);
authorsApiRouter.post('/', authorsApiController.createAuthor);
authorsApiRouter.put('/:id:author', authorsApiController.updateAuthor);
authorsApiRouter.delete('/:id_author', authorsApiController.deleteAuthor);



module.exports = authorsApiRouter;