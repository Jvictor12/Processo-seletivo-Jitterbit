const express = require('express');
const routes = express.Router();

const itemController = require('../controllers/itemController');

// Define todas as rotas para items (criei somente para facilitar meus testes no Postman)
routes.get('/list', itemController.getAllItems);
routes.get('/:id', itemController.getItemById);
routes.delete('/:id', itemController.deleteItem);

module.exports = routes;