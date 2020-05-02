CREATE DATABASE cat_db;
USE cat_db;

CREATE TABLE cats
(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    adoptable BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);