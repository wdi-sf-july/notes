# DB Associations
## Via SQL-ize

### Outline

* Setup
  * make a new project folder
  * npm install
    * `sequelize`
      * `sequelize` cli
      * `sequelize init`
    * create an `alias`
    * `sequelize-cli`
  * New Folder Structure
    * `models`
    * `migrations`
      * dependencies
        * npm install --save `lodash`
  * Create DB
  * Create A `planes` migration
    * migrate
      * `up`
      * `down`
  * Create A Sequelize Model
    * `sequelize import`
    * `function ModelName`
  * Enter Associations
    * `hasMany`
    * `belongsTo`

## Setup

```
npm install --save postgres
npm install --save sequelize

npm install --save sequelize-cli

alias sqlize='node_modules/.bin/sequelize'
```

Init a new project

```
sqlize init
```


## Running migration

Create a migration for a one to many relationship for our airplanes

```
sqlize migration:create --name create_passengers_table

```

Edit the migration passengers migration

```
module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
    migration.createTable('passengers',
      {id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      name: DataTypes.STRING,
      airplaneId: {
        type: DataTypes.INTEGER,
        foriegnKey: true
      }
    })
    .complete(done)    
  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    
    migration.dropTable('passengers')
      .complete(done)
  }
}

```

CREATE a MODEL for a passengar in the `models/` folder


```

function Passenger(sequelize, DataTypes){
  return sequelize.define('passenger', {
    name: DataTypes.STRING
  });
};



module.exports = Passenger;

```

Setup an association in `models/index.js`


`Example1`

```
var fs        = require('fs')
  , path      = require('path')
  , Sequelize = require('sequelize')
  , lodash    = require('lodash')
  , env       = process.env.NODE_ENV || 'development'
  , config    = require(__dirname + '/../config/config.json')[env]
  , sequelize = new Sequelize(config.database, config.username, config.password, config)
  , db        = {}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

// Associations

db.airplane.hasMany(db.passenger);
db.passenger.belongsTo(db.airplane);

// Example 1
db.passenger.create({name: "John Doe"})
  .success(function(passenger){
    db.airplane.find(1).success(function(airplane){
      airplane.setPassengers([passenger])
        .success(function(airplane){
         console.log(airplane)
      })
    });
});



module.exports = lodash.extend({
  sequelize: sequelize,
  Sequelize: Sequelize
}, db)


```



`Example2`

```

var fs        = require('fs')
  , path      = require('path')
  , Sequelize = require('sequelize')
  , lodash    = require('lodash')
  , env       = process.env.NODE_ENV || 'development'
  , config    = require(__dirname + '/../config/config.json')[env]
  , sequelize = new Sequelize(config.database, config.username, config.password, config)
  , db        = {}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

// Associations

db.airplane.hasMany(db.passenger);
db.passenger.belongsTo(db.airplane);

// Example 2

db.airplane.find(1).success(function(airplane){
    var passenger = db.passenger.build({name: "John Doe"})
    airplane.setPassengers([passenger])
      .success(function(airplane){
        passenger.save();
       console.log(airplane)
    })
});




module.exports = lodash.extend({
  sequelize: sequelize,
  Sequelize: Sequelize
}, db)

```



