-- connect mysql to file database/schema.sql
-- how to clear db (⌥ + CMD + L)
-- mysql -u student -p  student

DROP DATABASE IF EXISTS ball;
CREATE DATABASE ball;

USE ball

CREATE TABLE tennis (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  item_name VARCHAR(255) NOT NULL,
  amount INT NOT NULL
);

