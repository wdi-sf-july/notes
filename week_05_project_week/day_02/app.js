var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  app = express();

app.use(bodyParser({extended: true}))

var friends = require('./routes/friends')
app.use(friends);

module.exports = app;
app.listen(3000)
