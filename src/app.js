const express = require('express');
const orderRoutes = require('./routes/orderRoutes');
const itemRoutes = require('./routes/itemRoutes');
const db = require('./database/connection');

const app = express();

app.use(express.json());

db.connect().then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.error('Error connecting to the database', err);
});

app.use('/order', orderRoutes);
app.use('/item', itemRoutes);

module.exports = app;