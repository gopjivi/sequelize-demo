const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("sakila", "root", "Hanumika1!", {
  host: "localhost",
  dialect: "mysql",
});
const Post = require("./post");

async function deletePost() {
  await sequelize.sync();

  const post = await Post.findOne({ where: { id: "2" } });
  if (post) {
    await post.destroy();
    console.log("post deleted");
  }

  await sequelize.close();
}

deletePost();
