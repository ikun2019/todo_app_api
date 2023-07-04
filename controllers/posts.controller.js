const { sequelize, Post } = require('../models')

const getPosts = async function (req, res, next) {
  try {
    const posts = await Post.findAll();
    res.status(200).json({
      posts: posts
    });
  } catch (err) {
    console.error(err);
  }
}

const createPost = async function (req, res, next) {
  try {
    const post = new Post();
    post.name = req.body.name;
    post.text = req.body.text;
    await post.save();
    res.status(200).json({
      success: true,
      message: 'Success',
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getPosts,
  createPost,
}