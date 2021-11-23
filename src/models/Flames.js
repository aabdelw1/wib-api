const mongoose = require('mongoose')
const { Schema } = mongoose

const locations = new Schema({
  lat: {
    type: Number,
    required: false 
  },
  long: {
    type: Number,
    required: false 
  },
  base: {
    type: Number,
    required: false 
  }
})

const Flames = new Schema({
  name: {
    type: String,
    required: false
  },
  meetingOrigin: {
    type: String,
    required: false
  },
  hot: {
    type: Number,
    required: false
  },
  crazy: {
    type: Number,
    required: false
  },
  regret: {
    type: Number,
    required: false
  },
  involvement: {
    type: Number,
    required: false
  },
  talkingTime: {
    type: Number,
    required: false
  },
  physicalAltercations: {
    type: [Number],
    required: false
  }, 
  timeLine: {
    type: [String],
    required: false
  }, 
  locations: {
    type: [locations],
    required: false
  }
})

module.exports = Flames