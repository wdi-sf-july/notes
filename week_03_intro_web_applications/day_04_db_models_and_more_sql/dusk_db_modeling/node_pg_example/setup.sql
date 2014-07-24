CREATE DATABASE library_example_app;

\c library_example_app


CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title varchar(255),
  author varchar(255)
);

INSERT INTO books (title, author) VALUES ('The Taker', 'Lisa');