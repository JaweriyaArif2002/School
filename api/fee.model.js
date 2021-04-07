const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Fee = new Schema({
  feepackageId: {
    type: String
  },
  feepackageName: {
    type: String
  },
  feedetails: {
    type: Object
  }, 
  },{
      collection: 'Fee-Package'
  });
  
  module.exports = mongoose.model('fee',Fee);  