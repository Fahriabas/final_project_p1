var bcrypt = require('bcryptjs');

 function hashPassword(plainPassword) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(plainPassword, salt);
    return hash
}

 function checkPassword(plainPassword , hashPassword) {
   return bcrypt.compareSync(plainPassword, hashPassword); 
}

module.exports = { hashPassword , checkPassword}









/*
POST.js
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, {
        foreignKey: "user_id"
      })
      Post.hasMany(models.PostTag, {
        foreignKey: "post_id"
      })
    }
  }
  Post.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    imgUrl: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts'
  });
  return Post;
};
*/

/*
POSTTAG.js
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostTag extends Model {
    static associate(models) {
      // define association here
      PostTag.belongsTo(models.Post, {
        foreignKey: "post_id"
      })
      PostTag.belongsTo(models.Tag, {
        foreignKey: "tag_id"
      })
    }
  }
  PostTag.init({
    tag_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PostTag',
    tableName: 'posts_tags'
  });
  return PostTag;
};

TAG.js
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      // define association here
      Tag.hasMany(models.PostTag, {
        foreignKey: "tag_id"
      })
    }
  }
  Tag.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tag',
    tableName: 'tags'
  });
  return Tag;
};

User.js
'use strict';

const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
    
    static associate(models) {
      // define association here
      User.hasMany(models.Post, {
        foreignKey: "user_id"
      })
    }
  }
  User.init({
    username: DataTypes.STRING,
    role: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });

  User.beforeCreate((user, options) => {
    if (user.password) {
      user.password = hashPassword(user.password);
    }
  });

  return User;
};
*/