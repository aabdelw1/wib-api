const crypto = require('crypto')
const fs = require('fs') 

const key = [240, 12, 78, 55, 66, 52, 166, 59, 163, 171, 64, 249, 65, 39, 129, 200, 227, 16, 108, 167, 142, 114, 88, 228]
const IV = [12, 107, 189, 133, 95, 232, 220, 174]
var myKey = Buffer.from(key)
var myIV = Buffer.from(IV)

function encrypt (data) {
  const cipher = crypto.createCipheriv('des-ede3-cbc', myKey, myIV)

  let encrypted = cipher.update(data, 'utf8', 'base64')
  encrypted += cipher.final('base64')
  return encrypted
}

function decrypt (data) {
  const decipher = crypto.createDecipheriv('des-ede3-cbc', myKey, myIV)

  let encrypted = decipher.update(data, 'base64', 'utf8')
  encrypted += decipher.final('utf8')
  return encrypted
}
module.exports = { encrypt, decrypt }

// fs.writeFile('Output.txt', data, (err) => { 
//   if (err) throw err
// })
