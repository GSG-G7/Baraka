BEGIN;

DROP TABLE IF EXISTS lists, items, users CASCADE;

CREATE TABLE lists (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
 );

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL 
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  content VARCHAR(255),
  list_id INTEGER REFERENCES lists(id),
  user_id INTEGER REFERENCES users(id)
);

INSERT INTO lists (name) VALUES ('Project 1'),('Project 2'),('Project 3');
INSERT INTO users (name) VALUES ('Mai'),('Mohammed'),('Imad'),('Fadi');
INSERT INTO items (name, content, list_id, user_id) VALUES ('Item 1', 'Description text', 1, 1),('Item 2', 'Description text', 1, 2),('Item 3', 'Description text', 1, 3),('Item 1', 'Description text', 2, 1);
 
COMMIT;