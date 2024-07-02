const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("sakila", "root", "Hanumika1!", {
  host: "localhost",
  dialect: "mysql",
});
const Post = require("./post");
const User = require("./user");

async function createPost() {
  await sequelize.sync();

  const post = await Post.create({
    title: "First Post witH user",
    content: "This is the content of the first post.",
    UserId: User.id,
  });
  console.log("Post created:", post.toJSON());

  await sequelize.close();
}

createPost();
