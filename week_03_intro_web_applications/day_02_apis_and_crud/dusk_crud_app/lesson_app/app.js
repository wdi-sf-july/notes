var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  app = express();

var books = [{id: 1, title: "The Giver", author: "Lois Lowry"}];
var count = 1;
app.set("view engine", "ejs");

// some middleware to handle parsing form data
app.use(bodyParser.urlencoded());
// add middle to handle overiding POST requests
// for both PUT and DELETE
app.use(methodOverride("_method"));

app.get("/books", function(req, res){
  res.render("library/index", {books: books})
});

// serve a form for our application
app.get("/books/new", function(req, res){
  res.render("library/new")
});

app.post("/books", function(req, res){
  count += 1;
  console.log(req.body);
  // push new book
  var book = req.body.book;
  book.id = count;
  books.push(book)
  res.redirect("/books")
});

app.delete("/books/:id", function(req, res){
  var id = Number(req.params.id);
  var booksIndex;
  books.forEach(function(book, index){
     if(book.id === id) {
       booksIndex = index;
     }
  });
  books.splice(booksIndex, 1);
  res.redirect("/books");
});

app.get("/books/:id/edit", function(req,res){
  var id = Number(req.params.id);
  var editBook;
  books.forEach(function(book){
    if(book.id === id){
      editBook = book;
    }
  });
  res.render("library/edit", {book: editBook});
});

app.put("/books/:id", function(req,res){
  var id = Number(req.params.id);
  var editBook;
  books.forEach(function(book){
    if(book.id === id){
      editBook = book;
    }
  });
  editBook.title = req.body.book.title;
  editBook.author = req.body.book.author;
  res.redirect("/books");
})

app.listen(3000, function(){
  console.log("THE SERVER IS LISTENING ON localhost:3000");
});
