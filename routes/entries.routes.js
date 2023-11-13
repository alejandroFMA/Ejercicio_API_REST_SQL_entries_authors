const express = require('express');
// Rutas de productos
const entriesController = require("../controllers/entries.controller");
const entriesRouter = express.Router();

entriesRouter.get('/', entriesController.getEntries);
entriesRouter.post('/', entriesController.createEntry);
entriesRouter.put('/:title?', entriesController.updateEntry);
entriesRouter.delete('/:title?', entriesController.deleteEntry);



module.exports = entriesRouter;