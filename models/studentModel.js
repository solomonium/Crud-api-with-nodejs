const mongoose = require('mongoose')
const apiSchema = new mongoose.Schema({
  name: String,
  age: Number,
  message: String,
  createDate: {
    type: Date,
    required: Date.now
   },
})
module.exports = mongoose.model('Api', apiSchema)