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