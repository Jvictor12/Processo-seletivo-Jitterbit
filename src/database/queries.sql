-- Crie um banco de dados chamado "jitter" para que a API possa se conectar e armazenar os dados de pedidos e itens.

CREATE TABLE Orders (
	orderId VARCHAR(50) NOT NULL PRIMARY KEY,
	value NUMERIC,
	creationDate TIMESTAMP	
);

CREATE TABLE Items (
	orderId VARCHAR(50) NOT NULL PRIMARY KEY,
	productId INTEGER,
	quantity INTEGER,
	price NUMERIC,
	FOREIGN KEY (orderId) REFERENCES Orders(orderId)
);
