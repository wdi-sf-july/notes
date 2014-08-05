# Request Specs



### Intro Supertest

Let's get you playing with your first request specs. 
Just do an npm install:

```
npm install --save-dev supertest
```

This will save to the `devDependencies` which won't be necessarily installed during production, i.e.
if `NODE_ENV=production` then `npm install` will only install `dependencies`

Another way to avoid installing `devDependencies` is to use

```
npm install --production
```

Supertest uses `superagent`, which is a request module and adds some `expect` style assertions to test the response.


# Exercises

1. Fix the following to pass the test.

```
var express = require("express"),
  app = express();

app.get("/", function (req, res) {
  req.send("Hello World")
});

app.listen(3000)


// the following test
var request = require('supertest');
request(app)
  .get('/')
  .expect(200)
  .end(function(err, res){
    if (err) throw err;
  })
```

2. Fix the following to pass the test.

```
var express = require("express"),
  app = express();

app.get("/add/:numOne/:numTwo", function (req, res) {
  var numOne = req.params.numOne;
  var numTwo = req.params.numTwo;

  res.send(numOne + numTwo);
});

app.listen(3000)


// the following test
var request = require('supertest');

request(app)
  .get('/add/2/2')
  .expect(200)
  .expect("4")
  .end(function(err, res){
    if (err) throw err;
  })
```

3. Fix the following to pass the test.


```
var express = require("express"),
  bodyParser = require('body-parser'),
  app = express();

app.use(bodyParser)
var friends = [];

app.get("/friends", function (req, res) {
  res.send(friends.join("<br>"))
}); 

app.post("/friends", function (req, res) {
  friends.push(req.body.friend);
  res.send(friends.join("<br>"));
});

app.listen(3000)


// the following test
var request = require('supertest');

request(app)
  .post('/friends')
  .send({friend: {name: "john"}})
  .expect(302)
  .end(function(err, res){
    if (err) throw err;
  })
```


### More Routes

You might be wondering what happens if you have more routes to worry about, and in fact you might already have too many routes to keep your application feeling clean.

Luckily, there is a motivating and advanced design principle that comes to our rescue, `Separation of Concerns`.


Let's assume we have a friends app like the following:


```
var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  app = express();

app.use(bodyParser({extended: true}))

var friends = [{name: "john doe"}];

app.get('/friends', function (req, res) {
  var names = friends.reduce(function(names, friend){
    return names + " <br>" + friend.name;
  }, "");
  res.send(names)
}); 

app.get('/friends/new', function(req, res){
  var index = req.params.index;
  res.send("<form method=\'post\' action=\'/friends\'><input type=\'text\' name=\'friend[name]\'><button>SAVE</button></form>");
});

app.get('/friends/:index', function(req, res){
  var index = req.params.index;
  res.send(friends[index]);
});

app.get('/friends/:index/edit', function(req, res){
  res.send('Friends cannot be editted');
});

app.post('/friends', function (req, res) {
  friends.push(req.body.friend);
  res.redirect('/friends');
});

app.listen(3000)

```

It starts to get crowded after a while so what we can then do is separate out in a file under `routes/friends.js`. Note how we now have a `routes folder`.


`routes/friends.js`


```
var express = require('express')

var friends = [{name: "john doe"}];

var router = express.Router();

router.get('/friends', function (req, res) {
  var names = friends.reduce(function(names, friend){
    return names + " <br>" + friend.name;
  }, "");
  res.send(names)
}); 

router.get('/friends/new', function(req, res){
  var index = req.params.index;
  res.send("<form method=\'post\' action=\'/friends\'><input type=\'text\' name=\'friend[name]\'><button>SAVE</button></form>");
});

router.get('/friends/:index', function(req, res){
  var index = req.params.index;
  res.send(friends[index]);
});

router.get('/friends/:index/edit', function(req, res){
  res.send('Friends cannot be editted');
});

router.post('/friends', function (req, res) {
  friends.push(req.body.friend);
  res.redirect('/friends');
});

module.exports = router;

```



`app.js`


```
var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  app = express();

app.use(bodyParser({extended: true}))

var friends = require('./routes/friends')
app.use(friends);

app.listen(3000)



```

# Exercise 

* create an `/about`, `/contact`, and `/` and separate them into a route file called `site.js`


## Route Testing

Now you don't want to include you request tests in your application. Instead we create the following `test` and `test/request` folders and write them their for our request specs.

`npm install --save dev-mocha`

Sample Request Spec


`test/request/friends.js`

```
var app = require('../../app.js')
var request = require('supertest');


describe("Creating friends", function(){

  it ("should redirect after post", function(done){
    request(app)
      .post('/friends')
      .send({friend: {name: "john"}})
      .expect(302)
      .end(done)
  })
})
```








