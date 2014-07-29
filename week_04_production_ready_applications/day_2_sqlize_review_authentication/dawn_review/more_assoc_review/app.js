// app.js

var express = require('express'),
  db = require('./models/index.js'),
  bodyParser = require('body-parser'),
  methodOvrride = require('method-override'),
  app = express();

app.set('view engine', 'ejs');

app.use(methodOvrride());
app.use(bodyParser.urlencoded());

app.get('/authors', function (req,res) {
  db.author.findAll()
    .success(function(allAuthors){
      res.render("authors/index", {authors: allAuthors});
    })
});

app.get('/authors/:id', function (req,res) {
  var id = req.params.id;
  db.author.find(id)
  .success(function(foundAuthor){
    foundAuthor.getPosts()
    .success(function(foundPosts){
      res.render("authors/show", {
        author: foundAuthor,
        posts: foundPosts 
      })
    })
  })
});

app.get('/posts/:id', function (req,res) {
  var id = req.params.id;
  db.post.find(id)
  .success(function(foundPost){
    res.render("posts/show", {
      post: foundPost
    })
  })
});

app.get('/authors/:id/posts/new', function(req, res){
  var id = req.params.id;
  db.author.find(id)
  .success(function(foundAuthor){
    res.render("posts/new", {
      author: foundAuthor
    });
  });
});

app.post('/authors/:id/posts', function(req, res){
  var id = req.params.id;
  db.author.find(id)
  .success(function(foundAuthor){
    // create the post
    db.post.create(req.body.post)
    .success(function(newPost){
      // add it to the associations
      foundAuthor.addPost(newPost)
      .success(function(){
        // redirect after a successful association
        res.redirect("/posts/" + newPost.dataValues.id);
      })
    })
  })
  .error(function(err){
    res.redirect("/authors");
  })
});




app.listen(3000, function(){
  console.log("LISTENING ON PORT 3000")
})
