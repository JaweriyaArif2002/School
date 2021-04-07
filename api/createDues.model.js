const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let createDues = new Schema({


    departmentName: {
    type: String
  },
  FeesType: {
    type: String
  },
  calender:{
    type:Object

  }
  


}, {
  collection: 'createDues'
});




module.exports = mongoose.model('createDues',createDues);
