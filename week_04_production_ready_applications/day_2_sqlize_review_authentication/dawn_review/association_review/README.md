# SQL-ize
## A Guided Review \w Special Notes


### SETUP 

`Presetup`

* `npm init` to generate `package.json`
* `npm install --save pg`

Setup SQL-ize

* `npm install --save sequelize` 
    * then do a `npm install --save sequelize-cli`
    * because they both have `cli` tools that interfere so you have to be careful
    * if you see `--help` after running `sqlize` you probably need to reinstall
* `node_modules/.bin/sequelize` or `alias sqlize='node_modules/.bin/sequelize'`

Setup Application structure

*  Start our application folder structure
    * `sqlize init` to generate folder structure 
    * Generates a folder structure: 
        * `migrations` 
            * helps create tables, change columns, and track any other changes to DB
        * `models` help us interact with tables and manage associations
            * `index.js` this file includes all other models in  the `models/` fldr
        * `config`
            * `config.json` includes the database information for different environments
    * create the database in question
        * run `createdb the_db_name_here`
        * This allows you to have a database so you can run your migrations later.

Creating Migrations???

* When do we create migrations?
    * build a table
    * specifiy columns, datatypes, etc
    * make changes to an exisiting DB
* Why are migrations useful?
    * They give you a checkpoint for your db changes... in case something goes wrong...

Running Migrations:

* SETUP THE CONFIG FIRST FOR OUR DATABASE

`config.json` we remove the `username:` and `password`, 
and then changed the `dialect` to `postgres`

```
{
  "development": {
    "database": "blog_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

* `sqlize migration:create --name create_posts_table`
    * note here that the table name is **PLURAL**
* `sqlize migration:create --name create_authors_table`

Writing the migrations

* Beginning with migrations for the `create_posts_table`
  * We have the following base code
  * `up:` refers to ... how to create something like a table in the DB 
    * generally it runs the change you want.
  * `down` it undos/reverts/rollback changes you made in the up

`create_posts_table`

```
module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
    
    migration.createTable('posts', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      // REQUIRED: createdAt and updatedAt
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      // STRING is a VarChar of 255 characters default
      title: DataTypes.STRING,
      // For large posts we need more space
      body: DataTypes.TEXT
    })
    .complete(done);
  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    
    migration.dropTable('posts')
    .complete(done);
  }
}
```

`create_authors_table`

```
module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
    
    migration.createTable('authors', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      // REQUIRED: createdAt and updatedAt
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING
    })
    .complete(done);
//Hi Del
  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    
    migration.dropTable('authors')
    .complete(done);
  }
}
```
RUN THE SQLIZE MIGRATE

* `sqlize db:migrate` this makes the changes in our migration files
* We should continue running this until it says `no migrations pending`

Additional Migrations

* `sqlize migration:create --name  add_authorId_column_to_posts_table`

`add_authorId_column_to_posts_table`

```
module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
    migration.addColumn(
      'posts',
      'authorId',
      {
        type: DataTypes.INTEGER,
        foreignKey: true
      }
    )
    .complete(done)

  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    migration.removeColumn('posts','authorId')
        .complete(done)
  }
}


```


### CREATING MODELS

* `npm install --save lodash`
* Create a model in the `models/` folder
    * `post.js` 
        *  for interacting with our `posts` table 
        *  for managing relationships between tables

`models/post.js`


```

function Post(sequelize, DataTypes){

    /* sequelize.define(modelName, attributes, options);
        create a  model like `post`
        with attributes like `body` and `title`
    */
    return sequelize.define('post',{
        title: DataTypes.STRING,
        body: DataTypes.TEXT,
        authorId: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    })
}

module.exports = Post;

```

`models/author.js`


```

function Author(sequelize, DataTypes){

    /* sequelize.define(modelName, attributes, options);
        create a  model like `post`
        with attributes like `body` and `title`
    */
    return sequelize.define('author',{
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING
    })
}

module.exports = Author;

```

**NOTE BE SURE TO `NPM INSTALL --SAVE LODASH`**

### Playing In Terminal

* node 
    * and save the session using `.save file_name` 
    * create a nice console

`console.js` note the `db.post.create` has problems 

```
var repl = require('repl');
var db = require('./models/index.js');
var newREPL = repl.start("hello class> ");

newREPL.context.db = db;

```


### SETTING UP ASSOCIATIONS

* We want to setup a `has_many` association

```

db.author.hasMany(db.post);
db.post.belongsTo(db.author);

```

* test our association using a query:
    
    ```
db.author.find(1).success(function(foundAuthor){
  var newPost = db.post.build({title: "hello worlds again!"});
  foundAuthor.addPost(newPost).success(function(){
    newPost.save().then(function(post){
        console.log(post);
    })
  })
});
    ```

BETTER ASSOCIATIONS

`

```
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
```


### EXPRESS 

http://sequelizejs.com/articles/express










