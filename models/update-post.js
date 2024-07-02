const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("sakila", "root", "Hanumika1!", {
  host: "localhost",
  dialect: "mysql",
});
const Post = require("./post");

async function updatePost() {
  await sequelize.sync();

  const post = await Post.findOne({
    where: { id: "5" },
  });
  if (post) {
    post.title = "second post";
    (post.UserId = 3), await post.save();
    console.log("post updated:", post.toJSON());
  }

  await sequelize.close();
}

updatePost();
