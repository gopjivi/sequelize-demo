const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("sakila", "root", "Hanumika1!", {
  host: "localhost",
  dialect: "mysql",
});
const Post = require("./post");

async function sortPosts() {
  await sequelize.sync();

  const posts = await Post.findAll({
    order: [["title", "ASC"]],
  });
  console.log("Sorted posts:", JSON.stringify(posts, null, 2));

  await sequelize.close();
}

sortPosts();
