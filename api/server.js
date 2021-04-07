const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4002;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
//const businessRoute = require('./business.route');



require('dotenv').config();
mongoose.Promise = global.Promise; 
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
 // mongoose.connect('mongodb+srv://admin:admin@cluster0.clomz.mongodb.net/schoolsystem?retryWrites=true&w=majority', { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const businessRoute = require('./routes')
app.use('/business', businessRoute);
let clsRout= require('./class.routes')
app.use('/class', clsRout);
// let loginRoutes= require('./login.routes')
// app.use('/business', loginRoutes);
let FeeRout= require('./fee.routes')
app.use('/FEE', FeeRout);
let createVoucherRout=require('./createVoucher.routes')
app.use('/Voucher',createVoucherRout)
let feesTypeRout =require('./feeType.routes')
app.use('/feetype', feesTypeRout)
let loginRoutes =require('./login.routes');
//const { default: createVoucher } = require('../src/AllForms/createVoucher.js');
app.use('/login',loginRoutes)
let AdmissionRout =require('./Admission.routes')
app.use('/Admission',AdmissionRout)
let DuesRout = require('./createDues.routes')
app.use('/Dues',DuesRout)
app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});