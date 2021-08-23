const Post = require("../models/post.model");
const resolvers = {
  Query: {
    hello: () => {
      return "Hello world";
    },
    getAllPosts: async () => {
      return await Post.find({});
    },
  },
};

module.exports = resolvers;
