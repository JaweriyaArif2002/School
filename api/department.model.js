const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for Business

let Dept = new Schema({

  // departmentId: {
  //   type: String
  // },
  departmentName: {
    type: String
  },
  prefix: {
    type: String
  },
  detail:{
    type:Object

  }
  // classId: {
  //   type: String
  // },
  // className: {
  //   type: String
  // },
  //   classes: {
  //     type: Array
  // }


}, {
  collection: 'department'
});




module.exports = mongoose.model('depart', Dept);
