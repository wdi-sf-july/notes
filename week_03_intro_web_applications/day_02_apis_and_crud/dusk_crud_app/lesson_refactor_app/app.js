var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  app = express();


function Book(title, author){
  Book.count += 1;
  this.id = Book.count;
  this.title = title;
  this.author = author;
  Book.all.push(this);
};

Book.count = 0;
Book.all = [];

Book.findById = function(id) {
  var targetBook;
  this.all.forEach(function(book, index){
     if(book.id === id) {
       targetBook = book;
     }
  });
  return targetBook;
};

Book.destroy = function(id){
  var bookIndex;
  this.all.forEach(function(book, index){
    if (book.id === id){
      bookIndex === index;
    }
  });
  this.all.splice(bookIndex, 1);
};

Book.prototype.update = function(newObject){
  for(var key in this){
    if(this.hasOwnProperty(key) && key in newObject) {
      this[key] = newObject[key];
    }
  }
  return this;
};

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded());
app.use(methodOverride("_method"));

app.get("/books", function(req, res){
  res.render("library/index", {books: Book.all})
});

// serve a form for our application
app.get("/books/new", function(req, res){
  res.render("library/new")
});

app.post("/books", function(req, res){
  var newBook = req.body.book;
  new Book(newBook.title, newBook.author);
  res.redirect("/books")
});

app.delete("/books/:id", function(req, res){
  var id = Number(req.params.id);
  Book.destroy(id);
  res.redirect("/books");
});

app.get("/books/:id/edit", function(req,res){
  var id = Number(req.params.id);
  var editBook = Book.findById(id);
  res.render("library/edit", {book: editBook});
});

app.put("/books/:id", function(req,res){
  var id = Number(req.params.id);
  var book = Book.findById(id);
  book.update(req.body.book);
  res.redirect("/books");
})

app.listen(3000, function(){
  console.log("THE SERVER IS LISTENING ON localhost:3000");
});
