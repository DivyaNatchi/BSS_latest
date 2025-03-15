const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Adjust the path as necessary

const Subscription = sequelize.define(
  "Subscription",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(254),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Validate that the input is in email format
      },
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    tableName: "tbl_subscription", // Explicitly specify the table name
    timestamps: false, // Since we're manually managing 'updated_at'
  }
);

module.exports = Subscription;
