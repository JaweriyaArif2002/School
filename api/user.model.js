const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// // Define collection and schema for Business
// let users  = new Schema({
//   userId: {
//     type: String
//   },
//   password: {
//     type: String
//   },
  
// },{
//     collection: 'users'
// });

// // Define collection and schema for Business


// let Dept  = new Schema({
//   departmentId: {
//     type: String
//   },
//   departmentName: {
//     type: String
//   },
//   classes: {
//     type: Array
// }
  
// },{
//     collection: 'department'
// });  
// let classes = new Schema({
//   classId: {
//     type: String
//   },
//   className: {
//     type: String
//   },
  
// },{
//     collection: 'class'
// });

let schools = new Schema({
  nid: {
      type: Number,
      auto:true,
  },
  schoolName: {
      type: String,
      },
  users: {
      type: Array
  }
}, {
  collection: 'schools'
});
  

 module.exports = mongoose.model('school', schools);

