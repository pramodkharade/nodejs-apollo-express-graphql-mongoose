# nodejs-apollo-express-graphql-mongoose

GraphQL with nodejs ,express , apollo-server-express , mongoose

# install all required NPM

npm i express apollo-server-express graphql mongoose

query{

# getAllPosts{

# id,

# title

# }

getPost(id:"6123bd6a8cc2067c943147c3") {
title,
description
}
}

# mutation{

# createPost(post:{

# title:" Fist Post ",

# description:" This is description"

# }){

# id,

# title,

# description

# }

# }
