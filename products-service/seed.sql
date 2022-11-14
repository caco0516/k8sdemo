DROP TABLE IF EXISTS products;

CREATE TABLE products(
	id serial PRIMARY KEY,
	name VARCHAR ( 50 ) NOT NULL,
	price DECIMAL NOT NULL DEFAULT 0 
);

INSERT INTO products(name, price) VALUES('Cafe Con Leche', 3);
INSERT INTO products(name, price) VALUES('Latte', 5);
INSERT INTO products(name, price) VALUES('Cafe con Vainilla', 6);
INSERT INTO products(name, price) VALUES('Reposteria', 3);
INSERT INTO products(name, price) VALUES('American0', 3);
INSERT INTO products(name, price) VALUES('Cafe con Reposteria', 10);
