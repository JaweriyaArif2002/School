const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let feesType = new Schema({
   
  feesType: {
    type: String
  },
  code: {
    type: String
  },
  amount: {
    type: String
  },
  
}, {
  collection: 'Fees Type'
});

module.exports = mongoose.model('feesType', feesType);