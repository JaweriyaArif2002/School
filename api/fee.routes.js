
const express = require('express');
const FeeRout = express.Router();

 let Fee = require('./fee.model')
FeeRout.route('/addFee').post(function (req, res) {
  let fee = new Fee(req.body);
  console.log(fee)
  fee.save()
    .then(jk => {
      res.status(200).json({'Fee': 'School added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
FeeRout.route('/').get(function (req, res) {
  console.log(req.body)
  Fee.find(function(err, businesses){
  if(err){
    console.log(err);
  }
  else {
    console.log('bussineess',businesses);
    res.json(businesses);
  }
});
});

module.exports = FeeRout;