const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        minLength: 3
    },
    name: String,
    email: {
        type: String,
        unique: true,
    },
    passwordHash: String,
    series: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Series'
      }
    ],
  })
  
  userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      delete returnedObject.passwordHash
    }
  })
  
  userSchema.plugin(uniqueValidator)

  const User = mongoose.model('User', userSchema)
  
  module.exports = User