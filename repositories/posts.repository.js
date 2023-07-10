const { Posts } = require("../models");

class PostRepository {
  findAllPost = async () => {
    // ORM인 Sequelize에서 Posts 모델의 findAll 메소드를 사용해 데이터 요청
    const posts = await Posts.findAll();

    return posts;
  };

  createPost = async (nickname, password, title, content) => {
    // ORM인 Sequelize에서 Posts ahepfdml create 메소드를 사용해 데이터 요청
    const createPostData = await Posts.create({
      nickname,
      password,
      title,
      content,
    });

    return createPostData;
  };
}

module.exports = PostRepository;
