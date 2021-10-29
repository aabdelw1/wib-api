const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./types')
const resolvers = require('./resolvers')
const cors = require('cors')
require('dotenv').config()
require('./config')

const server = new ApolloServer({ typeDefs, resolvers })

const app = express()
const corsOptions = {
  origin: true,
  credentials: true 
}

app.use(cors(corsOptions))
server.applyMiddleware({ app, cors: false })

app.listen({ port: process.env.PORT || 4000 }, () =>
  console.log(
    `Server ready at http://localhost:${process.env.PORT || 4000}${
      server.graphqlPath
    }`
  )
)
