const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("sakila", "root", "Hanumika1!", {
  host: "localhost",
  dialect: "mysql",
});
const Post = require("./post");

async function readPosts() {
  await sequelize.sync();

  const posts = await Post.findAll();
  console.log("All Posts:", JSON.stringify(posts, null, 2));

  await sequelize.close();
}

readPosts();
