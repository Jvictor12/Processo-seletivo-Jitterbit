# Processo Seletivo Jitterbit - API de Pedidos e Itens

Este projeto é uma API REST em **Node.js + Express** com persistência em **PostgreSQL** para gerenciamento de pedidos (`order`) e itens (`item`).

## 📋 Pré-requisitos

Antes de iniciar, garanta que você tenha instalado:

- **Node.js** (recomendado: 18+)
- **npm** (vem com Node.js)
- **PostgreSQL** (recomendado: 14+)

Você pode validar com:

```bash
node -v
npm -v
psql --version
```

---

## 🧱 Estrutura do projeto

```text
.
├── server.js
├── package.json
└── src
    ├── app.js
    ├── controllers
    ├── database
    │   ├── connection.js
    │   └── queries.sql
    ├── models
    ├── postman
    │   └── Jitter System Analyst Jr.postman_collection.json
    └── routes
```

---

## ⚙️ Configurações necessárias

### 1) Clonar o repositório

```bash
git clone <url-do-repositorio>
cd Processo-seletivo-Jitterbit
```

### 2) Instalar dependências

```bash
npm install
```

### 3) Criar o banco de dados no PostgreSQL

Abra o PostgreSQL e execute:

```sql
CREATE DATABASE jitter;
```

Depois conecte no banco e execute o arquivo `src/database/queries.sql` para criar as tabelas:

```bash
psql -U postgres -d jitter -f src/database/queries.sql
```

> Se seu usuário/senha/host/porta forem diferentes, ajuste os parâmetros conforme seu ambiente.

### 4) Configurar conexão com banco

No arquivo `src/database/connection.js`, ajuste os campos conforme seu PostgreSQL:

```js
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'jitter',
  password: '',
  port: 5432
})
```

Exemplo comum (com senha):

```js
password: 'sua_senha'
```

---

## ▶️ Como executar o sistema

Como não há script de `start` no `package.json`, execute diretamente:

```bash
node server.js
```

Saída esperada no terminal:

- `Connected to the database`
- `Server is running on port 3000`

A API ficará disponível em:

```text
http://localhost:3000
```

---

## 🚀 Endpoints disponíveis

## Pedidos (`/order`)

### Criar pedido

- **POST** `/order`

Exemplo de body:

```json
{
  "numeroPedido": "PED123",
  "valorTotal": 150.75,
  "dataCriacao": "2026-01-12T10:30:00.000Z",
  "items": [
    {
      "idItem": 1,
      "quantidadeItem": 2,
      "valorItem": 50.25
    }
  ]
}
```

### Listar todos os pedidos

- **GET** `/order/list`

### Buscar pedido por ID

- **GET** `/order/:id`

### Atualizar pedido

- **PUT** `/order/:id`

Use o mesmo formato de JSON do cadastro.

### Deletar pedido

- **DELETE** `/order/:id`

---

## Itens (`/item`)

### Listar todos os itens

- **GET** `/item/list`

### Buscar item por ID do produto

- **GET** `/item/:id`

### Deletar item por ID do produto

- **DELETE** `/item/:id`

---

## 🧪 Testando com Postman

O projeto já inclui uma collection em:

```text
src/postman/Jitter System Analyst Jr.postman_collection.json
```

Passos:

1. Abra o Postman.
2. Clique em **Import**.
3. Selecione o arquivo da collection acima.
4. Execute as rotas com a API rodando em `localhost:3000`.

---

## 🔎 Observações importantes

- A porta da aplicação está fixa em `3000` no `server.js`.
- A conexão com o banco é inicializada em `src/app.js` ao subir o servidor.
- Caso o banco não conecte, revise credenciais e se o serviço PostgreSQL está em execução.

---

## ✅ Fluxo rápido (resumo)

1. Instalar Node.js e PostgreSQL.
2. `npm install`
3. Criar banco `jitter`.
4. Executar `src/database/queries.sql`.
5. Ajustar `src/database/connection.js`.
6. Rodar `node server.js`.
7. Testar via Postman ou chamadas HTTP para `http://localhost:3000`.
