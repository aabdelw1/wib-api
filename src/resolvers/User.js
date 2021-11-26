const bcrypt = require('bcrypt')
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
    logIn: async (parent, {email, password}) => {
      const existingUser = await UserModel.findOne({ email })

      if (!existingUser) {
        throw new Error('Email not found')
      }

      const validPassword = await bcrypt.compare(password, existingUser.password)
      if(!validPassword){
        throw new Error('Password is incorrect')
      }
      return existingUser
    },

    signUp: async (parent, { email, password }) => {
      const existingUser = await UserModel.findOne({ email })

      if (existingUser) {
        throw new Error('Email already in use')
      }

      const hash = await bcrypt.hash(password, 10)
      await UserModel.create({
        email,
        password: hash
      })
      const user = await UserModel.findOne({ email })

      return user
    },

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