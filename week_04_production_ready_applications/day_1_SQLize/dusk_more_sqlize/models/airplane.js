function Airplane(sequelize, DataTypes){
  return sequelize.define('airplane', {
    name: DataTypes.STRING
  });
};

module.exports = Airplane;