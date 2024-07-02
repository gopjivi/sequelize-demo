const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("sakila", "root", "Hanumika1!", {
  host: "localhost",
  dialect: "mysql",
});

const User = require("./user");
const Post = require("./post");

// Define associations
User.hasMany(Post);
Post.belongsTo(User);

async function syncModel() {
  await sequelize.sync();
  console.log("User model was synchronized successfully.");
}

syncModel();
