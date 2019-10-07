const { gql } = require('apollo-server-express')

module.exports = gql`

type GreekGod {
  _id: ID!
  name: String!
  desc: String!
}

input GodInput {
  name: String!
  desc: String!
}

type Query {
    greekGods: [GreekGod!]!
}

type Mutation {
    addGod(godInput: GodInput): GreekGod
}`
