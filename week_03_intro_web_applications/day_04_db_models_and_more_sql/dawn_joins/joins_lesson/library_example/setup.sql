DROP DATABASE IF EXISTS libraries_example;
CREATE DATABASE libraries_example;
\c libraries_example

CREATE TABLE libraries (
    id SERIAL PRIMARY KEY,
    name varchar(255),
    address text
);

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    isbn varchar(13) UNIQUE,
    title varchar(255),
    author text
);

CREATE TABLE library_books (
    id SERIAL PRIMARY KEY,
    book_id integer,
    library_id integer
);


INSERT INTO libraries (name, address) VALUES ('Library Of Congress', '123 Blank St.');
INSERT INTO libraries (name, address) VALUES ('Schwarzman', '124 Blank St.');
INSERT INTO libraries (name, address) VALUES ('Washington', '121 Blank St.');
INSERT INTO libraries (name, address) VALUES ('Berkeley', '119 Blank St.');
INSERT INTO libraries (name, address) VALUES ('Atlanta', '118 Blank St.');
INSERT INTO libraries (name, address) VALUES ('Yale', '120 Blank St.');
INSERT INTO libraries (name, address) VALUES ('Riordan', '117 Blank St.');


INSERT INTO books (title, author, isbn) VALUES ('The Hunger Games', 'Suzanne Collins', '9780439023528');
INSERT INTO books (title, author, isbn) VALUES ('Divergent', 'Veronica Roth', '9780062024039');
INSERT INTO books (title, author, isbn) VALUES ('Harry Potter and the Sorcerers Stone (Harry Potter, #1)', 'J.K. Rowling', '9788478888566');
INSERT INTO books (title, author, isbn) VALUES ('Pride and Prejudice', 'Jane Austen', '9780147509055');
INSERT INTO books (title, author, isbn) VALUES ('The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565');
INSERT INTO books (title, author, isbn) VALUES ('Jane Eyre', 'Charlotte Brontë', '9780318656601');

INSERT INTO library_books (library_id, book_id) VALUES (1, 1);
INSERT INTO library_books (library_id, book_id) VALUES (1, 1);
INSERT INTO library_books (library_id, book_id) VALUES (1, 2);
INSERT INTO library_books (library_id, book_id) VALUES (1, 3);
INSERT INTO library_books (library_id, book_id) VALUES (1, 3);
INSERT INTO library_books (library_id, book_id) VALUES (1, 4);
INSERT INTO library_books (library_id, book_id) VALUES (1, 5);
INSERT INTO library_books (library_id, book_id) VALUES (1, 5);
INSERT INTO library_books (library_id, book_id) VALUES (1, 6);


INSERT INTO library_books (library_id, book_id) VALUES (2, 1);
INSERT INTO library_books (library_id, book_id) VALUES (2, 2);
INSERT INTO library_books (library_id, book_id) VALUES (2, 2);
INSERT INTO library_books (library_id, book_id) VALUES (2, 3);
INSERT INTO library_books (library_id, book_id) VALUES (2, 4);
INSERT INTO library_books (library_id, book_id) VALUES (2, 4);
INSERT INTO library_books (library_id, book_id) VALUES (2, 5);
INSERT INTO library_books (library_id, book_id) VALUES (2, 5);
INSERT INTO library_books (library_id, book_id) VALUES (2, 6);



INSERT INTO library_books (library_id, book_id) VALUES (3, 1);
INSERT INTO library_books (library_id, book_id) VALUES (3, 2);
INSERT INTO library_books (library_id, book_id) VALUES (3, 3);
INSERT INTO library_books (library_id, book_id) VALUES (3, 3);
INSERT INTO library_books (library_id, book_id) VALUES (3, 4);
INSERT INTO library_books (library_id, book_id) VALUES (3, 4);
INSERT INTO library_books (library_id, book_id) VALUES (3, 5);
INSERT INTO library_books (library_id, book_id) VALUES (3, 5);
INSERT INTO library_books (library_id, book_id) VALUES (3, 6);


INSERT INTO library_books (library_id, book_id) VALUES (4, 1);
INSERT INTO library_books (library_id, book_id) VALUES (4, 2);
INSERT INTO library_books (library_id, book_id) VALUES (4, 3);
INSERT INTO library_books (library_id, book_id) VALUES (4, 4);
INSERT INTO library_books (library_id, book_id) VALUES (4, 4);
INSERT INTO library_books (library_id, book_id) VALUES (4, 4);
INSERT INTO library_books (library_id, book_id) VALUES (4, 5);
INSERT INTO library_books (library_id, book_id) VALUES (4, 5);
INSERT INTO library_books (library_id, book_id) VALUES (4, 6);


INSERT INTO library_books (library_id, book_id) VALUES (5, 1);
INSERT INTO library_books (library_id, book_id) VALUES (5, 2);
INSERT INTO library_books (library_id, book_id) VALUES (5, 3);
INSERT INTO library_books (library_id, book_id) VALUES (5, 4);
INSERT INTO library_books (library_id, book_id) VALUES (5, 5);
INSERT INTO library_books (library_id, book_id) VALUES (5, 5);
INSERT INTO library_books (library_id, book_id) VALUES (5, 5);
INSERT INTO library_books (library_id, book_id) VALUES (5, 5);
INSERT INTO library_books (library_id, book_id) VALUES (5, 6);


INSERT INTO library_books (library_id, book_id) VALUES (6, 1);
INSERT INTO library_books (library_id, book_id) VALUES (6, 2);
INSERT INTO library_books (library_id, book_id) VALUES (6, 3);
INSERT INTO library_books (library_id, book_id) VALUES (6, 4);
INSERT INTO library_books (library_id, book_id) VALUES (6, 5);
INSERT INTO library_books (library_id, book_id) VALUES (6, 6);
INSERT INTO library_books (library_id, book_id) VALUES (6, 6);
INSERT INTO library_books (library_id, book_id) VALUES (6, 6);
INSERT INTO library_books (library_id, book_id) VALUES (6, 6);








SELECT b.title, l.name FROM books AS b
  LEFT OUTER JOIN library_books AS bc
   ON bc.book_id=b.id 
  LEFT OUTER JOIN libraries AS l
   ON bc.library_id=l.id;



