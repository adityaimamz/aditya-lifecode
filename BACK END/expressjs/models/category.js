'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // define association here
    }
  }
  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Category already exists' 
      },
      validate: {
        notNull: {
          msg: 'inputan data name kategori tidak boleh kosong'
        }
      },
    },
    description: DataTypes.TEXT
  },{
    hooks: {
        afterValidate: (category, options) => {
          if(category.name){
            category.name = category.name.toLowerCase();
          }
        }
      },
    sequelize,
    modelName: 'Category',
  });
  return Category;
};