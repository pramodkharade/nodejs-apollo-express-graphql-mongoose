const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const resolvers = require("./src/resolvers/resolvers");
const typeDefs = require("./src/typeDefs/typeDefs");
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
  app.listen(port, () => {
    console.log(`Application is running on ${port}`);
  });
}
startServer();
