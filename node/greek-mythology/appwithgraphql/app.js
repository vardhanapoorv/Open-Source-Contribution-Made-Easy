/*
 * @Author: Apoorv Vardhan 
 * @Date: 2019-09-22 23:24:33 
 * @Last Modified by: Apoorv Vardhan
 * @Last Modified time: 2019-09-22 23:24:53
 */

const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

const graphQLSchema = require('./graphql/schema/index');
const graphQLResolvers = require('./graphql/resolvers/greekgod')

const app = express();

app.use(bodyParser.json());

app.use((req, res, next)  => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');  
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
})

app.use('/graphql', graphqlHttp({
    schema: graphQLSchema,
    rootValue: graphQLResolvers,
    graphiql: true
}))

mongoose.set('useUnifiedTopology', true);

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@oss-contri-jmuc0.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
, {useNewUrlParser: true}).then(() => {
    app.listen(8000);
}).catch(err => {
    console.log(err);
})