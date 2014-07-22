# More Express
## Views and Post Data


## Baseline

Let's start with what we had this morning:

`app.js`

```
var express = require('express'),
  app = express();

app.get('/', function(req, res){
  res.send('Hello world!');
});

```

### Views 

Fistly, we cannot keep using `res.send` to send a response. It would be much more efficient to store them in files. Let's make a folder, `/views`, and create an `index.html` page inside.

```
<!doctype html>

<html>
  <head>
  </head>
  <body>
    Hello world!
  </body>
</html>
```

and let's modify the `app.js` to use this file via `app#render`.

`app.js`

```
var express = require('express'),
  app = express();

app.get('/', function(req, res){
  // use a render
  res.render('index.html');
});

```

without setting the `view engine` this will cause an error.

### BodyParser

The next thing we need to get ready for is parsing params from a form, which you need an external module for called `body-parser`.

`app.js`

```
var express = require('express'),
  bodyParser = require('body-parser'),
  app = express();

// tell your app to use the module
app.use(bodyParser.urlencoded())

app.get('/', function(req, res){
  // use a render
  res.render('index.html');
});

```


### Templating

We might need to render some data into our views, so we'll also need a module for this, `ejs`. To do this change `index.html` to `index.ejs`.


`app.js`

```
var express = require('express'),
  bodyParser = require('body-parser'),
  ejs = require('ejs'),
  app = express();

// tell your app to use the module
app.use(bodyParser.urlencoded())

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  // use a render
  res.render('index.ejs', {name: "Ruby Rud"});
});

```

then we need to update our `index.ejs` to use a templating variable.

`index.ejs`

```
<!doctype html>

<html>
  <head>
  </head>
  <body>
    Hello, <%= name %>!
  </body>
</html>
```
