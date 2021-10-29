const mongoose = require('mongoose')
require('dotenv').config()
mongoose.Promise = global.Promise

mongoose
  .connect(process.env.API_ENV === 'prod' ? process.env.PROD_DB_URL : process.env.DEV_DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
    // reconnectTries: 3,
    // reconnectInterval: 1000
  })
  .catch(() => {
    console.error(`Failed to connect to: ${process.env.API_ENV === 'prod' ? process.env.PROD_DB_URL : process.env.DEV_DB_URL}. API_ENV=${process.env.API_ENV}`)
  })

mongoose.connection.on('open', () => {
  console.log('mongoose connected')
})

mongoose.connection.on('error', error => {
  console.error('A MongoDB error happened.')
  console.log(error)
})

mongoose.connection.on('disconnected', () => {
  console.error('Disconnected from MongoDB...')
})