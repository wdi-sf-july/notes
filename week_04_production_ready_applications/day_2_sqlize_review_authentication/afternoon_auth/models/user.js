var bcrypt = require("bcrypt");
var salt = bcrypt.genSaltSync(10);

module.exports = function (sequelize, DataTypes){
   var User = sequelize.define('user', {
     username: { 
        type: DataTypes.STRING, 
        unique: true, 
        validate: {
          len: [6, 30],
          }
    },
    password: {
        type:DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      }
    },
    
  {
    classMethods: {
      encryptPass: function(password) {
        var hash = bcrypt.hashSync(password, salt);
        return hash;
    }, 
      comparePass: function(userpass, dbpass) {
      // don't salt twice when you compare....watch out for this
        return bcrypt.compareSync(userpass, dbpass);  
    },
      createNewUser:function(username, password, err, success ) {
        if(password.length < 6) {
          err({message: "Password should be more than six characters"});
        }
        else{
        User.create({
            username: username,
            password: User.encryptPass(password)
          }).error(function(error) {
            console.log(error);
            if(error.username){
              err({message: 'Your username should be at least 6 characters long', username: username});
            }
            else{
              err({message: 'An account with that username already exists', username: username});
              }
          }).success(function(user) {
            success({message: 'Account created, please log in now'});
          });
        }
      },
      authorize: function(username, password, err, success) {
     // find a user in the DB
      User.find({
          where: {
            username: username
          }
        })
        // when that's done, 
        .done(function(error,user){
          if(error){
            console.log(error);
            err({message: "Oops! Something went wrong"});
          }
          else if (user === null){
            err({message: "Username does not exist"});
          }
          else if ((User.comparePass(password, user.password)) === true){
            success();
          }
          else {
            err({message: "Invalid password"});
          }
        });
      }  
    
      } // close classMethods
    } //close classMethods outer 

  ); // close define user
  return User;
}; // close User function



  



