const User = require('../models/userModel')
const mongoose = require('mongoose')
function getUserDetails(req,res,){
  let name = req.body.name;
  let message = req.body.message;
  let age = req.body.age;
  let date = req.body.date
  let user = new User({
    name,
    message,
    age,
    date
  })
  user.save().then((data)=>{
    res.send(data)
  })
}
module.exports.getUserDetails = getUserDetails;
//export default getUserDetails;