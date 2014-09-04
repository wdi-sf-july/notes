module.exports = function Friend(sequelize, DataTypes){
  return sequelize.define("friend", {
    name: DataTypes.STRING
  }, classMethods: {
    associate: function(db){

    }
  })
}