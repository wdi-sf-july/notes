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

