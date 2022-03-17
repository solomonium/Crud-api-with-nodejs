const Student = require('../models/studentModel')
//const mongoose = require('mongoose')
function create(req,res,){
  let name = req.body.name;
  let message = req.body.message;
  let age = req.body.age;
  let date = req.body.date
  let student = new Student({
    name,
    message,
    age,
    date
  })
  student.save().then((data)=>{
    res.send(data)
  })
}
module.exports.create = create