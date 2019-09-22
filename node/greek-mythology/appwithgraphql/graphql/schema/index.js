const { buildSchema } = require('graphql')

module.exports = buildSchema(`

type GreekGod {
  _id: ID!
  name: String!
  desc: String!
}

input GodInput {
  name: String!
  desc: String!  
}

type RootQuery {
    greekGods: [GreekGod!]!
}

type RootMutation {
    addGod(godInput: GodInput): GreekGod    
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`)