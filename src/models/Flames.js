const mongoose = require('mongoose')
const { Schema } = mongoose

const locations = new Schema({
  lat: {
    type: Number,
    required: true 
  },
  long: {
    type: Number,
    required: true 
  },
  base: {
    type: Number,
    required: true 
  }
})

const Flames = new Schema({
  name: {
    type: String,
    required: true
  },
  meetingOrigin: {
    type: String,
    required: true
  },
  hot: {
    type: Number,
    required: true
  },
  crazy: {
    type: Number,
    required: true
  },
  regret: {
    type: Number,
    required: true
  },
  involvement: {
    type: Number,
    required: true
  },
  talkingTime: {
    type: Number,
    required: false
  },
  physicalAltercations: {
    type: [Number],
    required: true
  }, 
  timeLine: {
    type: [String],
    required: true
  }, 
  locations: {
    type: [locations],
    required: false
  }
})

module.exports = Flames