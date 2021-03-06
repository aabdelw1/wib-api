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
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  doa: {
    type: String,
    required: false
  },
  number: {
    type: String,
    required: false
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