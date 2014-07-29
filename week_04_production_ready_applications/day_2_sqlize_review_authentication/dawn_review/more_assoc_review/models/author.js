// author.js

function Author(sequelize, DataTypes){

    /* sequelize.define(modelName, attributes, options);
        create a  model like `post`
        with attributes like `body` and `title`
    */
    var Author = sequelize.define('author',{
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING
    },
      {
        classMethods: {
          associate: function(db) {
            Author.hasMany(db.post);
          }
        }
      })
   return Author;
}

module.exports = Author;