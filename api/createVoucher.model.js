const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for Business

let createVoucher = new Schema({
  
  StudentKey: {
     type: String
},
StudentId: {
    type: Number
 },
 fullName:{
    type:String
 },
 fatherName:{
  type:String
},
AdmissionDate:{
  type:String
},
departmentName:{
  type:String
},
class:{
  type:String
},
dueDate:{
  type:String
},
issueDate:{
  type:String
},
validityDate:{
  type:String
},
FeeDate:{
  type:String
},
}, {
  collection: 'createVoucher'
});




module.exports = mongoose.model('createVoucher', createVoucher);
