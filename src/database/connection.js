// Importando a classe Pool do módulo pg para criar uma conexão com o banco de dados PostgreSQL.
const { Pool } = require('pg');

// Criando uma nova instância de Pool com as configurações de conexão para o banco de dados. Preencha com as informações do seu banco de dados se necessário.
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'jitter',
    password: '',
    port: 5432
})

module.exports = pool;