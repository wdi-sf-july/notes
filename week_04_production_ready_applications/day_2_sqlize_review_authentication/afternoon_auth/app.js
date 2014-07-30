var express = require("express"),
  bodyParser = require("body-parser"),
  app = express(),
  db = require("./models/index");

app.listen(3000, function(){
  console.log("get this party started on port 3000");  
});


