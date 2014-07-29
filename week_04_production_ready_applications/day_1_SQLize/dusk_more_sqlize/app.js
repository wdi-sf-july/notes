var express = require("express"),
  db = require("./models/index.js"),
  app = express();

app.set("view engine", "ejs");

app.get("/airplanes", function(req, res){

  db.airplane.findAll().success(function(airplanes){
    res.render('index', {airplanes: airplanes})
  })
})

app.listen(3000, function(){
  console.log("SERVER listening on 3000")
})