# Apartment lab

- Create a database called apartmentlab 
- Using this database, create two tables, one for owners and one for properties
- Keep this relationship in mind when designing your schema:
	+ **One owner can have many properties**

###Tables

- The owners table should consist of: 
	+ owner_id (this should be the primary key as well as a unique number that increments automatically)
	+ name
	+ age
- The properties table should consist of:
	+ property_id (this should be the primary key as well as a unique number that increments automatically)
	+ name
	+ number of units
	+ owner_id (this should have the constraint NOT NULL)
		+ There should be also be a foreign key that references the owners table

###Questions
Write down the following sql statements that are required to solve the following tasks.

```    
1. Show all the tables.
2. Show all the users. 
3. Show all the data in the owners table.
4. Show the names of all owners. 
5. Show the ages of all of the owners in ascending order. 
6. Show the name of an owner whose name is Donald. 
7. Show the age of all owners who are older than 30. 
8. Show the name of all owners whose name starts with an E. 
9. Add an owner named John who is 33 years old to the owners table.
10. Add an owner named Jane who is 43 years old to the owners table. 
11. Change Jane's age to 30. 
12. Change Jane's name to Janet. 
13. Add a property named Archstone that has 20 units. 
14. Delete the owner named Jane. 
15. Show all of the properties in alphabetical order that are not named Archstone and do not have an id of 3 or 5. 
16. Count the total number of rows in the properties table.
17. Show the highest age of all owners.
18. Show the names of the first three owners in your owners table.
19. Create a foreign key that references the owner_id in the owners table and forces the constraint ON DELETE NO ACTION. 
20. Show all of the information from the owners table and the properties table in one joined table.  
```
Bonus (this might require you to look up documentation online)

```
1. In the properties table change the name of the column "name" to "property_name". 
2. Count the total number of properties where the owner_id is between 1 and 3.
```