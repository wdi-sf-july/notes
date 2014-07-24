#SQL Joins

##Learning Objectives
- define joins
- define join table
- define primary key
- define foreign key
- list types of joins
- explain what each type of join retrieves
- Using SQL in sinatra

##Why are Joins Important

The main function of a relational database is so that data can relate to each other. If we had users, and they wrote blog posts, it is important that we know which users wrote which posts.  

Imagine if facebook had no way of keeping track of what other users you were friends with, or which users wrote which post on your wall.  

###Relationships and Joins

In your first SQL lesson you learned how to CREATE TABLE and DROP TABLE, and how to do the four basic SQL operations: SELECT, INSERT, UPDATE, and DELETE. With these features, we have what is essentially a spreadsheet, a spreadsheet which enforces constraints on the type of data in each column via the schema. It's as if Excel could handle a million rows, but had no way of expressing the relationship between the items in one spreadsheet and another.

Postgres and other SQL databases are relational. They are designed for storing and viewing data that is interrelated. To do this, one table has a foreign key to another table. If rows are related, one column in each row will have the same value. Usually, a column in one row will contain the primary key of another row.

###Keys

**Primary Key:** The primary key of a relational table uniquely identifies each record in the table.  

**Foreign Key:**  a foreign key is a field (or collection of fields) in one table that uniquely identifies a row of another table.[1][2][3] In other words, a foreign key is a column or a combination of columns that is used to establish and enforce a link between the data in two tables.  

####Foreign Key Example

![foreign_key](foreign_key.png)

Give table a foreign key

```sql
 create table person (
      id serial primary key,
      name text,
      age integer
    );

   create table pet (
      id serial primary key,
      name text,
      age integer,
      breed text,
      person_id integer
    );

  INSERT INTO person ( name, age)
        VALUES ('Zed', 37);

   INSERT INTO person ( name, age)
        VALUES ('Bobby', 7);

  INSERT INTO pet (name, breed, age, person_id)
        VALUES ( 'Fluffy', 'Unicorn', 1000, 1);

  INSERT INTO pet (name, breed, age, person_id)
        VALUES ('Rocko', 'Dog', 4, 2);

 INSERT INTO pet (name, breed, age, person_id)
       VALUES ('Gigantor', 'Robot', 25, 1);

INSERT INTO pet (name, breed, age, person_id)
       VALUES ('Goldy', 'Fish', 1, 2);

```

Doing our first Join

```sql

  SELECT * FROM person
  INENR JOIN pet
  ON person.id = pet.person_id;

  SELECT person.name, pet.name from person
  INNER JOIN pet 
  ON person.id = pet.person_id;

```

**Other Types of Joins**  

![SQL Joins Diagram](http://lh5.ggpht.com/-fnOQYPFr8D0/UagAzBIgMvI/AAAAAAAABbo/3fBL5Fm3Y9Y/SQL%252520JOINs.jpg)  

Full Outer Join  

```sql
SELECT * FROM person 
  FULL OUTER JOIN pet
  ON person.id = pet.person_id;
```

Left Outer Join  

```sql

SELECT * FROM person 
  LEFT OUTER JOIN pet
  ON person.id = pet.person_id;

```

Right Outer Join  

```sql

SELECT * FROM person 
  RIGHT OUTER JOIN pet
  ON person.id = pet.person_id;

```  

Left Outer Join with Where  

```sql
SELECT * FROM person
  LEFT OUTER JOIN pet
  ON person.id = pet.person_id
  WHERE pet.breed = "unicorn";
```

Cross Join  

```sql
SELECT * FROM person
  CROSS JOIN pet
  WHERE person.id = 1;
```

####Exercise

Students select information from tables with joins

**Join Talbe**  

    create table person (
      id integer primary key,
      name text,
      age integer
    );

    create table pet (
      id integer primary key,
      name text,
      age integer,
      breed text,
      dead integer
    );

    create table person_pet (
      person_id integer,
      pet_id integer 
    );

```sql
SELECT * FROM person 
    INNER JOIN person_pet
    ON person.id = person_pet.person_id
    INNER JOIN pet
    ON person_pet.pet_id = pet.id;
```