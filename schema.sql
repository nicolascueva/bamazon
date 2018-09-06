DROP DATABASE IF EXISTS BAMAZON_DB;

CREATE DATABASE BAMAZON_DB;

USE BAMAZON_DB;

CREATE TABLE Products(
	item_id INT (11) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (100) NULL,
    department_name VARCHAR (100) NULL,
	price DECIMAL (8,2) NULL,
	stock_quantity INT (10),
	PRIMARY KEY (item_id)
);

INSERT INTO Products (product_name, department_name, price, stock_quantity)
VALUES ("Adidas UltraBoost Shoes", "Footwear", 180.00, 6);

INSERT INTO Products (product_name, department_name, price, stock_quantity)
VALUES ("Mac Book", "Technology", 1200.00, 4);

INSERT INTO Products (product_name, department_name, price, stock_quantity)
VALUES ("Iphone X", "Technology", 1000.00, 1);

INSERT INTO Products (product_name, department_name, price, stock_quantity)
VALUES ("Levis Jeans", "Clothing", 80.00, 10);

INSERT INTO Products (product_name, department_name, price, stock_quantity)
VALUES ("Calvin Klein Shirt", "Clothing", 30.00, 12);

INSERT INTO Products (product_name, department_name, price, stock_quantity)
VALUES ("Backpack", "Apparel", 50.00, 6);

INSERT INTO Products (product_name, department_name, price, stock_quantity)
VALUES ("Joseph Abboud Suit", "Clothing", 600.00, 4);

INSERT INTO Products (product_name, department_name, price, stock_quantity)
VALUES ("Amazon Echo", "Technology", 50.00, 20);

INSERT INTO Products (product_name, department_name, price, stock_quantity)
VALUES ("Vizio TV", "Technology", 500.00, 3);

INSERT INTO Products (product_name, department_name, price, stock_quantity)
VALUES ("MVMT Watch", "Apparel", 200.00, 10);

SELECT * FROM Products;