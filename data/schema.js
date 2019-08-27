/*
 * File: /Users/tonymedrano/Desktop/graphql/mastering-graphql/data/schema.js
 * Project: /Users/tonymedrano/Desktop/graphql/mastering-graphql
 * Created Date: Tuesday August 27th 2019
 * Author: tonymedrano
 * -----
 * Last Modified: Tuesday, 27th August 2019 3:43:01 pm
 * Modified By: tonymedrano (info@tonymedrano.com)
 * -----
 * Copyright (c) 2019 Agap2
 */

import { makeExecutableSchema } from "graphql-tools"
import resolvers from "./resolvers"

const typeDefs = `
        type Friend {
            id: ID,
            firstname: String!,
            lastname: String,
            age: Int,
            gender: Gender,
            language: String,
            email: String,
            contacts: [Contact]
        }

        type Alien {
            id: ID,
            firstname: String!,
            lastname: String,
            planet: String
        }

        type Contact {
            firstname: String
            lastname: String
        }

        enum Gender {
            MALE
            FEMALE
            OTHER
        }

        type Query {
            getFriend(id: ID): Friend
        }

        input FriendInput {
            id: ID,
            firstname: String,
            lastname: String,
            age: Int,
            gender: Gender,
            language: String,
            email: String,
            contacts: [ContactInput]
        }

        input ContactInput {
            firstname: String
            lastname: String
        }

        type Mutation {
            createFriend(input: FriendInput): Friend
        }
`
const schema = makeExecutableSchema({ typeDefs, resolvers})
export { schema }