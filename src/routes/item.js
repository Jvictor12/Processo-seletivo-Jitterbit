const express = require('express');
const routes = express.Router();

const itemController = require('../controllers/itemController');

routes.post('/item', itemController.createItem);
routes.get('/item', itemController.getAllItems);
routes.get('/item/:id', itemController.getItemById);
routes.put('/item/:id', itemController.updateItem);
routes.delete('/item/:id', itemController.deleteItem);

module.exports = routes;