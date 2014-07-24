
// 1. Connect to postgres and 
//    get a client object

// 2. Use the client to make a 
//  a query to our DATABASE

var pg = require('pg');

var db = {};

db.config = {
    database: "library_example_app",
    port: 5432,
    host: "localhost"
};


db.connect = function(runAfterConnecting) {
    pg.connect(db.config, function(err, client, done){
        if (err) {
             console.error("OOOPS!!! SOMETHING WENT WRONG!", err);
        }
        runAfterConnecting(client);
        done();
    });
};

db.query = function(statement, callback){
  db.connect(function(client){
    client.query(statement, callback);
  })
}


// Connect to the DATABASE
/*
db.query("SELECT * FROM person;", function(err, res){
    if (err) {
        console.log("OOOPS!", err);
    } 
    console.log(res.rows);
});
*/

function Book(params){
    this.title = params.title;
    this.author = params.author;
    this.id = params.id;
}

Book.all = function(somethingToDoAfter){
    db.query("SELECT * FROM books", function(err, res){
        if (err) {
            console.log(err);
        }
        var books = [];
        res.rows.forEach(function(params){
          books.push(new Book(params));
        });
        somethingToDoAfter(books)
    })
};
Book.all(function(books){
    console.log("The books are:", books);
});

