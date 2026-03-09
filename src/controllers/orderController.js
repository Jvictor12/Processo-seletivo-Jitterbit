const orderModel = require('../models/orderModel');

//Exporta as funções do controller para serem usadas nas rotas
module.exports = {

    //Função para criar um novo pedido /order
    async createOrder(req, res) {

        try { 
            const result = await orderModel.createOrder(req.body)
            res.status(201).json(result); 
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    //Função para atualizar um pedido existente PUT /order/:id
    async updateOrder (req, res) {

        try {
            const result = await orderModel.updateOrder(req.params.id, req.body)
            res.status(200).json(result); 
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    //Função para buscar um pedido por id GET /order/:id
    async getOrderById (req, res) {

        try {
            const result = await orderModel.getOrderById(req.params.id)
            res.status(200).json(result); 
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    //Função para buscar todos os pedidos GET /order/list
    async getAllOrders (req, res) {
        try {
            const result = await orderModel.getAllOrders()
            res.status(200).json(result); 
        } catch (error) {
            res.status(500).json({ error: error.message });
        }   
    },
    //Função para deletar um pedido DELETE /order/:id
    async deleteOrder (req, res) { 
        try {
            const result = await orderModel.deleteOrder(req.params.id)
            res.status(200).json(result); 
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}