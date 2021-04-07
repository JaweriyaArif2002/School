const express = require('express');
const businessRoutes = express.Router();
let Business = require('./department.model');
//let Schools=require('./login.model');
//let Dept =require('./login.model')
//let classes = require('./login.model')
//const clsRout = express.Router();
businessRoutes.route('/adddept').post(function (req, res) {
  let dept = new Business(req.body);
  console.log(dept)
  
  dept.save()
    .then(dept => {
      res.status(200).json({'School': 'School added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
businessRoutes.route('/').get(function (req, res) {
  console.log(req.body)
  Business.find(function(err, businesses){
  if(err){
    console.log(err);
  }
  else {
    console.log(businesses);
    res.json(businesses);
  }
});
});
businessRoutes.route('/delete/:id').get(function (req, res) {
  Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
      if(err) res.json(err);
      else res.json('Successfully removed');
      //window.location.reload();
  });
});
businessRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  console.log(id);
  Business.findById(id, function (err, business){
    console.log(business)
      res.json(business);
  });
});

//  Defined update route
businessRoutes.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function(err, business) {
    if (!business)
      res.status(404).send("data is not found");
    else {
       business.prefix = req.body.prefix;
        business.departmentName = req.body.departmentName;
        //business.business_gst_number = req.body.business_gst_number;

        business.save().then(business => {
          res.json('Update complete');
        
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

//  Defined update route
// businessRoutes.route('/updatearray').post(function (req, res) {
//   //console.log(req.param.id)
//   console.log('Reach update Array',req.body,'mongo DB object id',req.body.departmentId)
//   Business.findById(req.body.departmentId, function(err, business) {
//   if (!business)
//     res.status(404).send("data is not found");
//   else {
//      // business.departmentId = req.body.departmentId;
//       //business.departmentName = req.body.departmentName;
//       //business.business_gst_number = req.body.business_gst_number;
//       business.classes=req.body.classes;
//       console.log('In the depth')
//       business.save().then(business => {
//         res.json('Update complete');
      
//       })
//       .catch(err => {
//         res.status(400).send("unable to update the database");
//       });
//   }
// });
// });


module.exports = businessRoutes;
