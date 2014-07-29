// post.js


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
