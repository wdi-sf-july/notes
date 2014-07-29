
var db = require('./models/index.js');

db.author.find(1).success(function(foundAuthor){
  var newPost = db.post.build({title: "hello worlds again!"});
  foundAuthor.addPost(newPost).success(function(){
    newPost.save().then(function(post){
        console.log(post);
    })
  })
});