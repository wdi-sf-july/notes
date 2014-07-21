var express = require('express'),
  ejs = require('ejs'),
  bodyParser = require('body-parser'),
  app = express();


// create a faux database
var books = [{title: "foobar"}];

app.use(bodyParser.urlencoded());

// tells our app to render .html
// as ejs
//app.engine('html', ejs.__express);
// set our app to ejs
app.set('view engine', 'ejs');

app.get('/books', function(req, res){
  res.render("books/index", {books: books});
});

app.get('/books/new', function(req, res){
  res.render('books/new');
});
app.get('/books/:id', function(req, res){
  var index = req.params.id;
  var book = books[index];
  res.render("books/show", {book: book})
})

app.post('/books', function(req, res){
  console.log(req.body.book);
  books.push(req.body.book);
  console.log(books)
  res.redirect('/books');
});


app.get("/greet/:name", function(req, res){
  var name = req.params.name;
  res.render('index', {name: name})
});

app.listen(3000, function(){
  console.log("SERVER STARTED ON localhost:3000");
});