var pg = require('pg');

var db = {};

db.config = {
  database: 'dresser_app',
  host: 'localhost',
  port: '5432'
};

db.connect = function(cb){
  pg.connect(this.config, cb);
};

db.query = function(stmnt, params, cb) {
  this.connect(function(err, client, done) {
    client.query(stmnt, params, cb);
    done();
  });
};

db.end = function(){
  pg.end();
};

module.exports = db;
