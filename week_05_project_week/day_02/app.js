var express = require('express'),
  bodyParser = require('body-parser'),
  app = express();

app.use(bodyParser())

var friends = require('./routes/friends');

// CREATE THE 'site' routes
app.get("/", function(req, res){
  res.send("splash!")
})

app.get("/contact", function(req, res){
  res.send("contact us later!")
})

app.get("/about", function(req, res) {
  res.send("about us!!")
})

app.use(friends);
app.listen(3000)

module.exports = app;