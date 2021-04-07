const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Admission = new Schema({
   
  studentId: {
    type: String
  },
  fullName: {
    type: String
  },
  fatherName: {
    type: String
  },
  DOB: {
    type: Date
  },
  Bform: {
    type: String
  },
  AdmDate:{
      type: Date
  },
  fatherCnic:{
    type: String
},
fatherCell:{
    type: String
},
fatherEmail:{
    type: String
},
fatherQualification:{
    type: String
},
fatherOccupation:{
    type: String
},
motherName:{
    type: String
},
motherCnic:{
    type: String
},
feedetails: {
  type: Object
},
departmentName:{
  type: String

},
class:{
  type: String
},
feepackageId:{
  type: String
},
selectedPkgFee:{
  type: String
},
feepackagename:{
  type: String
},
selectedPkgFee:{
  type: String
},
DuesDetail:Schema.Types.Mixed
}, {
    
  collection: 'Registration'
});

module.exports = mongoose.model('Admission', Admission);