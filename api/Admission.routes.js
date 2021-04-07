
const express = require('express');
const AdmissionRout = express.Router();

 let Admission = require('./Admission.model')

 let admObj=new Admission()

 AdmissionRout.route('/addAdmission').post(function (req, res) {
 
 
  let CLS = new Admission(req.body);
  
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

AdmissionRout.route('/updateRdues').post(function (req, res) {
    admObj.findById(req._id, function(err, business) {
    if (!business)
      res.status(404).send("data is not found");
    else {
       
      admObj.DuesDetail=req.DuesDetail
      admObj.markModified("DuesDetail")
          
      //business.class = req.body.class;
       // business.shortName = req.body.shortName;
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

AdmissionRout.route('/').get(function (req, res) {
  console.log('get',req.body)
  Admission.find(function(err, classes){
  if(err){
    console.log(err);
  }
  else {
    console.log(classes);
    res.json(classes);
  }
});
});

// clsRout.route('/delete/:id').get(function (req, res) {
//   classes.findByIdAndRemove({_id: req.params.id}, function(err, business){
//       if(err) res.json(err);
//       else res.json('Successfully removed');
//       //window.location.reload();
//   });
// });
// clsRout.route('/edit/:id').get(function (req, res) {
//   let id = req.params.id;
//   console.log(id);
//   classes.findById(id, function (err, business){
//     console.log(business)
//       res.json(business);
//   });
// });

// //  Defined update route
// clsRout.route('/update/:id').post(function (req, res) {
//     classes.findById(req.params.id, function(err, business) {
//     if (!business)
//       res.status(404).send("data is not found");
//     else {
//        business.class = req.body.class;
//         business.shortName = req.body.shortName;
//         //business.business_gst_number = req.body.business_gst_number;

//         business.save().then(business => {
//           res.json('Update complete');
        
//         })
//         .catch(err => {
//           res.status(400).send("unable to update the database");
//         });
//     }
//   });
// });


// clsRout.route('/updatearray').post(function (req, res) {
//   //console.log(req.param.id)
//   console.log('Reach update Array',req.body,'mongo DB object id',req.body.packageId)
//   classes.findById(req.body.packageId, function(err, business) {
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



module.exports = AdmissionRout;
