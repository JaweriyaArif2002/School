const express = require('express');
const feesTypeRout = express.Router();

 let feesType = require('./feesType.model')
 feesTypeRout.route('/addfeesType').post(function (req, res) {
  let FEESTYPE = new feesType(req.body);
  
  //console.log('_id',req.body.classId)
  //console.log(CLS)
  FEESTYPE.save()
    .then(jk => {
      res.status(200).json({'FEES TYPE': 'School added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
feesTypeRout.route('/').get(function (req, res) {
  console.log(req.body)
  feesType.find(function(err, businesses){
  if(err){
    console.log(err);
  }
  else {
    console.log(businesses);
    res.json(businesses);
  }
});
});
feesTypeRout.route('/delete/:id').get(function (req, res) {
  feesType.findByIdAndRemove({_id: req.params.id}, function(err, business){
      if(err) res.json(err);
      else res.json('Successfully removed');
      //window.location.reload();
  });
});

module.exports = feesTypeRout;
