const { gql } = require('apollo-server-express')

const User = gql`
  type User {
    _id: ID!
    email: String!
    password: String!
    firstName: String
    lastName: String
    gender: String
    doa: String
    number: String
    groups: [Int]
    flames: [flames]
  }

  type flames {
    name: String
    meetingOrigin: String
    hot: Float
    crazy: Float
    regret: Float
    involvement: Float
    talkingTime: Float
    physicalAltercations: [Int]
    timeLine: [String]
    locations: [locations]
  }
  type locations {
    lat: Float
    long: Float
    base: Int
  }
  
  input flamesInput {
    name: String
    meetingOrigin: String
    hot: Float
    crazy: Float
    regret: Float
    involvement: Float
    talkingTime: Int
    physicalAltercations: [Int]
    timeLine: [String]
    locations: [locationsInput]
  }
  input locationsInput {
    lat: Float
    long: Float
    base: Int
  }

  extend type Query {
    allUsers: [User]
    oneUser(_id: ID!): User
  }
  extend type Mutation {
    signUp(
      email: String!
      password: String!
    ): User!
    addUser(
      email: String!
      password: String!
      firstName: String
      lastName: String
      gender: String
      doa: String
      number: String
      groups: [Int]
      flames: [flamesInput]
    ): User!
    updateUser(
      _id: ID!
      email: String!
      password: String!
      firstName: String
      lastName: String
      gender: String
      doa: String
      number: String
      groups: [Int]
      flames: [flamesInput]
    ): User!
    deleteUser(_id: ID!): User!
  }
`
module.exports = User