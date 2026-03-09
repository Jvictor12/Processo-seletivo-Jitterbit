const db = require('../database/connection');

module.exports = {

    //Função para buscar todos os itens GET /item/list
    async getAllIems (){

        //Query para buscar todos os itens
        const items = await db.query('SELECT * FROM Items');
        return items.rows;
    },
    
    //Função para buscar um item por id GET /item/:id
    async getItemById (id) {
        
        //Query para buscar o item pelo id do produto
        const result = await db.query('SELECT * FROM Items WHERE productId = $1', [id]);
        
        //Verifica se o item existe, caso contrário lança um erro
        if (result.rows.length === 0) {
            throw new Error('Item não encontrado');
        }
        
        return result.rows[0];
    },

    //Função para deletar um item DELETE /item/:id
    async deleteItem (id) {
        
        //Query para deletar o item pelo id do produto
        await db.query('DELETE FROM Items WHERE productId = $1', [id])

        return { message: 'Item deletado com sucesso' };    
    }
}