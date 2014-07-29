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
