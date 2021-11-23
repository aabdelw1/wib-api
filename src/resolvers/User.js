const UserModel = require('../models/User')

const User = {
  Query: {
    async allUsers (parent) {
      return UserModel.find()
    },
    async oneUser (parent, { _id }) {
      return UserModel.findById(_id)
    }
  },
  Mutation: {
    async addUser (
      parent,
      { email, password, firstName, lastName, gender, doa, number, groups, flames }
    ) {
      const user = await UserModel.create({
        email,
        password,
        firstName,
        lastName, 
        gender,
        doa, 
        number,
        groups,
        flames
      })
      return user
    },
    async updateUser (
      parent, 
      { _id,  email, password, firstName, lastName, gender, doa, number, groups, flames }
    ) {
      const user = await UserModel.findOneAndUpdate(
        { _id },
        { _id,  email, password, firstName, lastName, gender, doa, number, groups, flames },
        { new: true }
      )
      return user
    },
    async deleteUser (parent, { _id }) {
      return UserModel.findByIdAndRemove({ _id })
    }
  }
}

module.exports = User