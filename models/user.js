// models/user.js
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sakila", "root", "Hanumika1!", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define("User", {
  // Model attributes
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
});

// Sync the model with the database
async function syncModel() {
  await sequelize.sync();
  console.log("User model was synchronized successfully.");
}

syncModel();
// Export the User model
module.exports = User;
