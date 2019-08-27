import express from "express"
import graphqlHTTP from "express-graphql"
import schema from "./schema"

const app = express()

const port = 8082

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!')
});

const root = { hello: () => "Hi, I'm Tony Medrano!"}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(port, () => console.log(`Running server at port: ${port}`))