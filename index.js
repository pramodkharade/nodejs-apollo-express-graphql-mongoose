const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const resolvers = require("./src/resolvers/resolvers");
const typeDefs = require("./src/typeDefs/typeDefs");
const mongoose = require("mongoose");
const port = process.env.PORT || 4000;

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });
  await apolloServer.start();

  apolloServer.applyMiddleware({ app: app });
  app.use((req, res) => {
    res.json({ msg: "Hello world" });
  });
  await mongoose.connect("mongodb://localhost:27017/postDBGPL", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });
  console.log("Mongoose connected");
  app.listen(port, () => {
    console.log(`Application is running on ${port}`);
  });
}
startServer();
