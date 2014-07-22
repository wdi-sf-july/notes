var express = require('express'),
  bodyParser = require('body-parser'),
  // checkout the docs:
  //  https://github.com/expressjs/method-override
  methodOverride = require('method-override'),
  app = express();

var books = [ {title: "The Giver", author: "Lois Lowry"}];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));


app.get('/books/', function(req, res) {
  res.render("books/index", {books: books});
});

/* test the following route using curl
 *
 * curl -X DELETE http://localhost:3000/books/0
 */
app.delete('/books/:id', function(req, res) {
  console.log(req.params.id);
  res.send("DELETED BOOK: " + req.params.id);
});

app.listen(3000,function(){
  console.log("Running on localhost:3000");
});
