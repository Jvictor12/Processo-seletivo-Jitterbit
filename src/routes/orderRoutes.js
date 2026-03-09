const express = require('express');
const routes = express.Router();

const orderController = require('../controllers/orderController');

// Define todas as rotas para pedidos
routes.post('/', orderController.createOrder);
routes.get('/list', orderController.getAllOrders);
routes.get('/:id', orderController.getOrderById);
routes.put('/:id', orderController.updateOrder);
routes.delete('/:id', orderController.deleteOrder);

module.exports = routes;