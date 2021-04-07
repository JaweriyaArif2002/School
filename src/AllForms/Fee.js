import React from 'react'
//import { Link } from "react-router-dom";
import axios from 'axios'
import TableRow from './feeRow'
import Home from '../../src/components/home'
const sAdd = require('../myDB')
class Fee extends React.Component{
  constructor(props) {
    super(props);
    this.onFeepackageId = this.onFeepackageId.bind(this);
   this.onFeepackageName = this.onFeepackageName.bind(this);
  // this.onDescription = this.onDescription.bind(this);
  // this.onfeeAmount = this.onfeeAmount.bind(this);
  //this.selectedindex = this.selectedindex.bind(this);
//  this.onNewbtn = this.onNewbtn.bind(this)
  this.onSubmit = this.onSubmit.bind(this);
  this.state = {business: []};
  this.state = {classes:[]};
  this.state = {allFeesType:[]};
    this.state = {
        feepackageId: '',
        feepackageName: '',
        feedetails:'',
        allFeesType: [],
        // accountHead: '',
        // description: '',
        // feeAmount: '',
        // year:'',
        // business:[],
        // classes:[],
         
        
    }
}
componentDidMount(){
  // console.log('yes')
 //axios.get(sAdd.ADDSERVER + '/feetype')
 //console.log('http://'+location.hostname + ':4002/feetype','  ',window.location)
 axios.get(sAdd.ADDSERVER + '/feetype')
   .then(response => {
    // console.log(response.data)
     this.setState({ allFeesType: response.data });
     //this.setState({ tables: response.data });
   })
   .catch(function (error) {
     console.log(error);
   })
 }
// onNewbtn(){
//   console.log('ok')
//   //console.log('allFeesTypehere',this.state.allFeesType)
  
//   this.setState({
//     //departmentId: e.target.value,
   
//     allFeesType:this.state.allFeesType,
//     //classes:mclass
//   })
//   this.fillTable()
// }
fillTable(did){
  
  return this.state.allFeesType.map(function(object, i){
   // console.log(object)
    return <TableRow obj={object} key={i} />;
    
});

console.log('Ok',this.state.classes)

}

onFeepackageId(e) {
  this.setState({
    feepackageId: e.target.value
  });
  // if(e.target.value="new"){
  //   console.log('ok')
  // }
}
onFeepackageName(e) {
  this.setState({
    feepackageName: e.target.value
  });
  // if(e.target.value="new"){
  //   console.log('ok')
  // }
}
// selectedindex(e){
//   // console.log(e.target.value)
//   var dept=this.state.business;
//  var deptname=""
//  var i=0

//  var mclass=[]
//  //console.log(e.target.value)
//  var _id=""
//  for(i=0;i<dept.length;i++){
//     if(dept[i]["_id"]==e.target.value){
//       console.log('yes i Reaced')
//       deptname=dept[i]["departmentName"]
//       _id=dept[i]["_id"]
//       mclass=dept[i]["classes"]
//       console.log(mclass)
//     }
//  }
//  this.setState({
// //  packageId: e.target.value,
//  // year:deptname,
//  // _id:_id,
//  // classes:mclass
// })

 
//   // this.setState({
//   //   year: e.target.value
//   // })
// }
//let year;

onSubmit(e) {
  e.preventDefault();
  
  let fees=this.state.allFeesType
  console.log('allfeesdetail here',this.state.allFeesType)
  //console.log('allfeesdetail here',fees.length[i])
  let FEETYPE =""
  //let CODE =""
  //let AMOUNT=""
  //console.log(e.target.value)
  var i=0
  var allDetail={}
  for(i=0;i<fees.length;i++){

    // if(fees[i]["feesType"]){
    //   console.log('yes i Reaced')
    //   FEETYPE=fees[i]["feesType"]
    
      //console.log(fees[i]["feesType"][{code:fees[i]["code"],amount:fees[i]["amount"]}])
    //console.log()
    var feesType =fees[i]["feesType"]
    allDetail[feesType]={
           code:fees[i]["code"],
           amount:fees[i]["amount"]
  
         }
    // var allDetail={
    //   feesType:{
    //     code:fees[i]["code"],
    //     amount:fees[i]["amount"]

    //   }
      
    // } 
    console.log(allDetail)

 }
 
  const obj = {
    
 
    feepackageId:this.state.feepackageId,
    feepackageName:this.state.feepackageName,
    feedetails:allDetail
  };
  //console.log(obj,this.props.match)
  //console.log(FEETYPE)
  console.log(obj)
  axios.post(sAdd.ADDSERVER + '/FEE/addFee', obj)
      .then(res =>{
        console.log(res.data)
        if(res.data){
          console.log('sucess',res.data)
          // return <Redirect to="/" />;
//<Link to={'/index.component'} />
     //this.histroy.push('/index.component')
    // let history = useHistory();
//history.push("/Home")   
    }
        else{
          console.log('Error')
        }
      } //console.log(res.data)
      );
  
  this.setState({
    //business: [],
    feepackageId: '',
    feepackageName:'',
    feedetails:''
  })
  }
  render(){
    //let { dpt} = this.state
    return(
      <div>
        <Home />
<div style={{minHeight: '1246.8px'}} className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          {/* <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Validation</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Validation</li>
                </ol>
              </div>
            </div>
          </div> */}
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              {/* left column */}
              <div className="col-md-9">
                {/* jquery validation */}
                <div className="card card-info">
        <div style={{fontWeight:'bold',padding:20,fontSize:30}} className="card-header">
          <h3 style={{fontSize:40}}>Fee Package</h3>
        </div>
        {/* /.card-header */}
        {/* form start */}
        <form className="form-horizontal" onSubmit={this.onSubmit} style={{padding:20}}>
          <div className="card-body">
            <div className="form-group row">
              <label htmlFor="inputEmail3"  className="col-sm-4 col-form-label">Fee Package Id: *</label>
              <div className="col-sm-5">
                <input className="form-control"  value={this.state.feepackageId}
                onChange={this.onFeepackageId} id="inputEmail3" placeholder="Package Id" type="number" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">Fee Package Name: *</label>
              <div className="col-sm-5">
                <input className="form-control" id="inputPassword3" 
                    value={this.state.feepackageName}
                    onChange={this.onFeepackageName}
                    placeholder="Package Name" type="text" />
              </div>
            </div>
            <br />

            <div>
                        <button type="submit" className="btn btn-default float-right">Cancel</button>
                        <button type="submit" className="btn btn-info ">SUBMIT</button>

          </div>
          <br />
          <br />
                        <div className="card-footer">
            <table className="table table-bordered "  style={{paddingTop:50,textAlign:'center',marginTop:50,backgroundColor:'white'}}>
            <thead> 
              <tr>
                <th>FEES TYPE</th>
                <th>CODE</th>
                <th>AMOUNT</th>
                
              </tr>
            </thead>
            <tbody >
            { this.fillTable() }
            </tbody>
          </table>
         
          </div>
          </div>
          {/* /.card-body */}
          
          {/* /.card-footer */}
        </form>
        
      </div>
                {/* /.card */}
              </div>
              {/*/.col (left) */}
              {/* right column */}
              <div className="col-md-6">
              </div>
              {/*/.col (right) */}
            </div>
            {/* /.row */}
          </div>{/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
      
    
  </div>
    )

    
  }
}
export default Fee