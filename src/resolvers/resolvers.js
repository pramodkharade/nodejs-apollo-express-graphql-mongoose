const Post = require("../models/post.model");
const resolvers = {
  Query: {
    hello: () => {
      return "Hello world";
    },
    getAllPosts: async () => {
      return await Post.find({});
    },
    getPost: async (parent, args, context, info) => {
      const { id } = args;
      return await Post.findById(id);
    },
  },
  Mutation: {
    createPost: async (parent, args, context, info) => {
      const { title, description } = args.post;
      const post = new Post({ title, description });
      await post.save();
      return post;
    },
    deletePost: async (parent, args, context, info) => {
      const { id } = args;
      await Post.findByIdAndDelete(id);
      return `Okay post has been deleted ${id}`;
    },
  },
};

module.exports = resolvers;
