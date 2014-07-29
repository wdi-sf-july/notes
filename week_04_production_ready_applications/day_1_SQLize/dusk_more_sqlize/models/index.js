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

// Example

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
