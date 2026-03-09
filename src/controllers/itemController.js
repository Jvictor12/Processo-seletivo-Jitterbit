const itemModel = require('../models/itemModel');

//Exporta as funções do controller para serem usadas nas rotas
module.exports = {

    //Função para buscar todos os itens GET /item/list
    async getAllItems (req, res){
        try {
            const result = await itemModel.getAllIems()
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    //Função para buscar um item por id GET /item/:id
    async getItemById (req, res) {
        try {
            const result = await itemModel.getItemById(req.params.id)
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    //Função para deletar um item DELETE /item/:id
    async deleteItem (req, res) {
        try {
            const result = await itemModel.deleteItem(req.params.id)
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}