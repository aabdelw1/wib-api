const mongoose = require('mongoose')
const { Schema } = mongoose
const Flames = require('./Flames')

const User = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: false
  },
  doa: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  groups: {
    type: [Number],
    required: false
  },
  flames: {
    type: [Flames],
    required: false
  },
},
{
  collection: 'users'
})

module.exports = mongoose.model('Users', User)