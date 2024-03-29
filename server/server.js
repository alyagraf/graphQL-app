const express = require('express');
const colors = require('colors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

const app = express();
//connect to db
connectDB();

//set graphQL endpoint
app.use(
  '/graphql',
  graphqlHTTP({ schema, graphiql: process.env.NODE_ENV === 'development' })
);
app.listen(port, () => console.log(`Server Started on port ${port}`));
