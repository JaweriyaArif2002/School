const express = require('express');
const loginRoutes = express.Router();
//let Business = require('./login.model');
let Schools=require('./user.model');
loginRoutes.route('/addschool').post(function (req, res) {
    let mobj=req.body;
    // console.log(mobj);
    // let logobj={
    //     userId:"",
    //     password:"",
    // }
    
    //Business.findOne(mobj,function(err, businesses){
      Schools.findOne(mobj,function(err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
  });
  
  module.exports = loginRoutes;