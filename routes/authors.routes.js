const express = require('express');
// Rutas de productos
const authorsApiController = require("../controllers/authors.controller");
const authorsApiRouter = express.Router();

authorsApiRouter.get('/', authorsApiController.getAuthors);
authorsApiRouter.post('/', authorsApiController.createAuthor);
authorsApiRouter.put('/:email?', authorsApiController.updateAuthor);
authorsApiRouter.delete('/:email?', authorsApiController.deleteAuthor);



module.exports = authorsApiRouter;