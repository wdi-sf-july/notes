function Passenger(sequelize, DataTypes){
  return sequelize.define('passenger', {
    name: DataTypes.STRING
  });
};



module.exports = Passenger;