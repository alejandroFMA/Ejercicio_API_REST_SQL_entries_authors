const express = require('express');
// Rutas de productos
const entriesController = require("../controllers/entries.controller");
const entriesRouter = express.Router();

entriesRouter.get('/', entriesController.getEntries);
entriesRouter.post('/', entriesController.createEntry);
entriesRouter.put('/', entriesController.updateEntry);
entriesRouter.delete('/:id_entry', entriesController.deleteEntry);



module.exports = entriesRouter;