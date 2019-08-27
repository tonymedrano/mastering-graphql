/*
 * File: /Users/tonymedrano/Desktop/graphql/mastering-graphql/index.js
 * Project: /Users/tonymedrano/Desktop/graphql/mastering-graphql
 * Created Date: Tuesday August 27th 2019
 * Author: tonymedrano
 * -----
 * Last Modified: Tuesday, 27th August 2019 2:24:02 pm
 * Modified By: tonymedrano (info@tonymedrano.com)
 * -----
 * Copyright (c) 2019 Agap2
 */

import express from "express"
import graphqlHTTP from "express-graphql"
import { schema } from "./data/schema"

const port = 8082
const app = express()

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!')
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(port, () => console.log(`Running server at port: ${port}`))