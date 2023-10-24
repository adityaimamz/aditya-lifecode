"use strict";
const { Model } = require("sequelize");
const { validate } = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  Review.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
          notNull: {
            msg: "inputan data userId tidak boleh kosong",
          },
        },
        isExist(value) {
          return sequelize.models.User.findByPk(value).then((el) => {
            if (!el) {
              throw new Error("User not found");
            }
          });
        },
      },
      productId: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
          notNull: {
            msg: "inputan ProductId tidak boleh kosong",
          },
        },
        isExist(value) {
          return sequelize.models.Product.findByPk(value).then((el) => {
            if (!el) {
              throw new Error("Product not found");
            }
          });
        },
      },
      point: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "inputan data point product tidak boleh kosong",
          },
          min: {
            args: [1],
            msg: "inputan data point product tidak boleh kurang dari 1",
          },
          max: {
            args: [5],
            msg: "inputan data point product tidak boleh lebih dari 5",
          },
        },
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "inputan data content tidak boleh kosong",
          },
        },
      }
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
