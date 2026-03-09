const db = require('../database/connection');

module.exports = {

    async createOrder(order) {
            const orderId = order.numeroPedido
            const value = order.valorTotal
            const creationDate = order.dataCriacao
            
            //Valida se os campos obrigatórios estão presentes, caso contrário lança um erro
            if (!orderId || !value || !creationDate) {
                throw new Error('Algum dos requisitos não foi informado: numeroPedido, valorTotal, dataCriacao');
            }
            //Query para inserir o pedido na tabela Orders
            await db.query(
                'INSERT INTO Orders(orderId, value, creationDate) VALUES ($1, $2, $3)',
                [orderId, value, creationDate]
            )

            //Query para inserir os itens do pedido na tabela Items, utilizando o orderId gerado para relacionar os itens ao pedido e repetição com For para percorrer os itens do pedido
            for (const item of order.items){

                await db.query(
                    'INSERT INTO Items(orderId, productId, quantity, price) VALUES ($1, $2, $3, $4)',
                    [orderId, item.idItem, item.quantidadeItem, item.valorItem]
                )
            }

            return { message: 'Pedido Criado com Sucesso' };
        
    },
    async getAllOrders() {
        //Query para buscar todos os pedidos
        const orders = await db.query(  'SELECT * FROM Orders');
        return orders.rows;
    }, 

    //Função para buscar um pedido por id GET /order/:id
    async getOrderById(id) {

        //Query para buscar o pedido pelo id
        const order = await db.query(
            'SELECT * FROM Orders WHERE orderId = $1',
            [id]
        )
        //Query para buscar os itens do pedido pelo id do pedido
        const items = await db.query(
            'SELECT * FROM Items WHERE orderId = $1',
            [id]
        )
        //Verifica se o pedido existe, caso contrário lança um erro
        if (order.rows.length === 0) {
            throw new Error('Pedido não encontrado');
        }
        return { ...order.rows[0], items: items.rows };
    },

    //Função para atualizar um pedido existente PUT /order/:id
    async updateOrder(id, body) {
        const orderId = body.numeroPedido
        const value = body.valorTotal
        const creationDate = body.dataCriacao

        //Query para atualizar o pedido
        await db.query(
            'UPDATE Orders SET orderId = $1, value = $2, creationDate = $3 WHERE orderId = $4',
            [orderId, value, creationDate, id]
        )

        //Query para atualizar os itens do pedido
        for (const item of body.items){
            await db.query(
                'UPDATE Items SET productId = $1, quantity = $2, price = $3 WHERE orderId = $4',
                [item.idItem, item.quantidadeItem, item.valorItem, id]
            )
        }

        return { message: 'Pedido atualizado com sucesso' };
    },

    //Função para deletar um pedido DELETE /order/:id
    async deleteOrder(id) {

        //Query para deletar os itens do pedido primeiro pela hierarquia no banco de dados
        await db.query(
            'DELETE FROM Items WHERE orderId = $1',
            [id]
        )
        //Query para deletar o pedido
        await db.query(
            'DELETE FROM Orders WHERE orderId = $1',
            [id]
        )
        return { message: 'Pedido deletado com sucesso' };
    }
}