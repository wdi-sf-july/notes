var express = require('express'),
  bodyParser = require('body-parser'),
  app = express();

var books = [ {title: "The Giver", author: "Lois Lowry"}];

app.use(bodyParser.urlencoded({extended: true}));

app.get('/books/', function(req, res) {
  res.send( books);
});

/* test the following route using curl
 *
 * curl -X DELETE http://localhost:3000/books/0
 */
app.delete('/books/:id', function(req, res) {
  console.log(req.params.id);
  res.send("DELETED!");
});

app.listen(3000,function(){
  console.log("Running on localhost:3000");
});
