// Importanto as dependências necessárias para o aplicativo, incluindo o framework Express, as rotas para pedidos e itens, e a conexão com o banco de dados.
const express = require('express');
const orderRoutes = require('./routes/orderRoutes');
const itemRoutes = require('./routes/itemRoutes');
const db = require('./database/connection');

const app = express();

app.use(express.json());

// Conectando ao banco de dados e iniciando o servidor. Se a conexão for bem-sucedida, uma mensagem de sucesso será exibida no console. Caso contrário, um erro será registrado.
db.connect().then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.error('Error connecting to the database', err);
});

// Adicionando as rotas para pedidos /order e itens /item ao Express. 
app.use('/order', orderRoutes);
app.use('/item', itemRoutes);

module.exports = app;