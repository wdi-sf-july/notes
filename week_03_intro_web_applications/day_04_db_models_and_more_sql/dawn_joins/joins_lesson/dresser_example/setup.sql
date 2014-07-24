DROP DATABASE IF EXISTS dresser_app;
CREATE DATABASE dresser_app;

\c dresser_app

CREATE TABLE shirts (
  id SERIAL PRIMARY KEY,
  name varchar(255),
  color varchar(255)
);

CREATE TABLE pants (
  id SERIAL PRIMARY KEY,
  name varchar(255),
  color varchar(255)
);


\d+ shirts

\d+ pants


