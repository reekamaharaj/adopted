CREATE DATABASE cat_db;
USE cat_db;

CREATE TABLE cats
(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    adopted BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO cats (name) VALUES ('Journey');
INSERT INTO cats (name) VALUES ('Oran');
INSERT INTO cats (name) VALUES ('Vienna');
INSERT INTO cats (name) VALUES ('Elton');
INSERT INTO cats (name, adopted) VALUES ("Ember", true);
INSERT INTO cats (name, adopted) VALUES ("Clara", true);
INSERT INTO cats (name, adopted) VALUES ("Yuffie", true);

SELECT * FROM cats;