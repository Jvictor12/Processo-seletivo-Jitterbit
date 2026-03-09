const express = require('express');
const routes = express.Router();

const orderController = require('../controllers/orderController');

routes.post('/order', orderController.createOrder);
routes.get('/order', orderController.getAllOrders);
routes.get('/order/:id', orderController.getOrderById);
routes.put('/order/:id', orderController.updateOrder);
routes.delete('/order/:id', orderController.deleteOrder);

module.exports = routes;