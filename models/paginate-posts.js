const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("sakila", "root", "Hanumika1!", {
  host: "localhost",
  dialect: "mysql",
});
const Post = require("./post");

async function paginatePosts() {
  await sequelize.sync();

  const posts = await Post.findAll({
    limit: 2,
    offset: 1,
  });
  console.log("Paginated posts:", JSON.stringify(posts, null, 2));

  await sequelize.close();
}

paginatePosts();
