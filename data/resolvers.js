/*
 * File: /Users/tonymedrano/Desktop/graphql/mastering-graphql/resolvers.js
 * Project: /Users/tonymedrano/Desktop/graphql/mastering-graphql
 * Created Date: Tuesday August 27th 2019
 * Author: tonymedrano
 * -----
 * Last Modified: Tuesday, 27th August 2019 2:45:26 pm
 * Modified By: tonymedrano (info@tonymedrano.com)
 * -----
 * Copyright (c) 2019 Agap2
 */

import { Friends } from "./dbConnector"

export const resolvers = { 
    Query: {
        getFriend: ({ id }) => {
            return new Friend(id, friendDatabase[id])
        }
    },
    MUtation: {
        createFriend: (root, { input }) => {
            const newFriend = new Friends({
                firstname: input.firstname,
                lastname: input.lastname,
                age: input.age,
                gender: input.gender,
                language: input.language,
                email: input.email,
                contacts: input.contacts
            })

            newFriend.id = newFriend._id
            return new Promise((resolve, object) => {
                newFriend.save((err) => {
                    if(err) reject(err)
                    else resolve(newFriend)
                })
            })
        }
    }
}