const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// let classes = new Schema({
//     classId: {
//       type: String
//     },
//     className: {
//       type: String
//     },
    
//   },{
//       collection: 'class'
//   });
  
  

// let classes = new Schema({
   
//     departmentId: {
//       type: String
//     },
//     departmentName: {
//       type: String
//     },
//     classId: {
//       type: String
//     },
//     className: {
//       type: String
//     },
//     //   classes: {
//     //     type: Array
//     // }
  
//   }, {
//     collection: 'claesses'
//   });
let classes = new Schema({
   
  departmentId: {
    type: String
  },
  departmentName: {
    type: String
  },
  class: {
    type: String
  },
  shortName: {
    type: String
  },
  section: {
    type: String
  },
  //   classes: {
  //     type: Array
  // }

}, {
  collection: 'claesses'
});

module.exports = mongoose.model('classes', classes);