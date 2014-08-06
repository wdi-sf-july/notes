var express = require("express"),
  bodyParser = require("body-parser"),
  app = express(),
  db = require("./models/index");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
	res.render('index');
});

app.get("/signup", function(req,res){
	res.render('signup', {message: null, username: ""});
});

app.get("/login", function(req,res){
	res.render("login", {message: null});
});

app.post("/login", function(req, res){


// call my authorize method
db.user.authorize(req.body.username, req.body.password, 
	function(err){
		res.render("login", {message: err.message});
	},
	function(success){
		res.redirect("home");
	});
// if err - render back to login page with error message
// if success - render the home page
});

app.post('/create', function(req,res){
	//have to call my create new user function
	db.user.createNewUser(req.body.username, req.body.password,
		function(err){
			res.render("signup", {message: err.message, username: req.body.username});
		},
		function(success) {
			res.render('index', {message: success.message});
		});
	//need to do some error checking with a message
	//should render index with a success message if this all worked
});

app.get('/home', function(req,res){
	res.render('home');
});

app.get("*", function(req,res){
	res.render("404");
});

app.listen(3000, function(){
  console.log("get this party started on port 3000");  
});


