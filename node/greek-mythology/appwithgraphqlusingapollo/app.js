/*
 * @Author: Apoorv Vardhan
 * @Date: 2019-09-22 23:25:03
 * @Last Modified by: Apoorv Vardhan
 * @Last Modified time: 2019-09-22 23:46:04
 */

/*
TODO: Create the GraphQL setup using Apollo-Server. Refer Apollo Docs for help.
*/

const mongoose = require('mongoose');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers/greekgod');
const models = require('./models')

const app = express();
const port = 4000 || process.env.PORT;


mongoose.set('useUnifiedTopology', true);

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@oss-contri-jmuc0.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
    , { useNewUrlParser: true })


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { models }
})

server.applyMiddleware({ app })


app.listen({ port }, () => {
    console.log(`Server started http://localhost:${port}${server.graphqlPath}`)
}).on('error', () => {
    console.log(error)
})
