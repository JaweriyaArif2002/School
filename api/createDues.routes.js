const express = require('express');
const DuesRout = express.Router();

 let createDues = require('./createDues.model')
 DuesRout.route('/addDues').post(function (req, res) {
  let CLS = new createDues(req.body);
  
  //console.log('_id',req.body.classId)
  //console.log(CLS)
  CLS.save()
    .then(jk => {
      res.status(200).json({'Class': 'School added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});




module.exports = DuesRout;
