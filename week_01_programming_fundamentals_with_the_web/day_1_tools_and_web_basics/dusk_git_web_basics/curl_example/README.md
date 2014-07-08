#Curl Examples

In terminal do the following to play with the example,

```
bundle install
rake db:reset
rails s
```

Open up a new tab and try the following:

responds with all books

```
curl http://localhost:3000/books
```

or for just the data add `.json`

```
curl http://localhost:3000/books.json
```

responds with book 1

```
curl http://localhost:3000/books/1
```

How would you get the data for book `1`

responds with error. Why?

```
curl http://localhost:3000/books/4
```

deletes the book 

```
curl -X DELETE http://localhost:3000/books/1
```


