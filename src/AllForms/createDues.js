import React from 'react'
import axios from 'axios'
import Home from '../../src/components/home'
import Option from './option'
import OptionFees from './optionFees'
const sAdd = require('../myDB')
class createDues extends React.Component{
  constructor(props) {
    super(props);
     this.state = {business: []};
    this.state = {classes:[]};
    this.state = {allclasses:[]};
    this.onSubmit = this.onSubmit.bind(this);
    this.selectedindex=this.selectedindex.bind(this)    
    this.selectedFees=this.selectedFees.bind(this);
    this.onCalender=this.onCalender.bind(this);
    this.state = {
      departmentName: '',
      FeesType: '',
        business:[],
        Fees:[],
        allclasses:[]
    }

    
}

componentDidMount(){
 
axios.get(sAdd.ADDSERVER + '/business')
  .then(response => {
    this.setState({ business: response.data });
       
    axios.get(sAdd.ADDSERVER + '/feetype')
  .then(response => {
    this.setState({ Fees: response.data });
       
  })
  .catch(function (error) {
    console.log(error);
  })

  })
  .catch(function (error) {
    console.log(error);
  })
}

selectedFees(){

var fees =this.state.Fees
var feesType=""
var i=0;
for(i=0;i<fees.length;i++){
feesType=fees[i]["feesType"]

}
this.setState({
    
    FeesType:feesType,

  })
}
fillFeesOption(){
//    console.log('yes',this.state.Fees)
    return this.state.Fees.map(function(object, i){
     return <OptionFees obj={object} key={i} />;
        
});
    
  }
filloptions(){
  //console.log(this.state)
  return this.state.business.map(function(object, i){
    return <Option obj={object} key={i} />;
      
});
  
}

selectedindex(e){
   
 var dept=this.state.business;
 var deptname=""
 var i=0
//console.log(dept)
 var mclass=[]
 //console.log(e.target.value)
 var _id=""
 for(i=0;i<dept.length;i++){
    if(dept[i]["_id"]==e.target.value){
   //   console.log('yes i Reaced')
      deptname=dept[i]["departmentName"]
      _id=dept[i]["_id"]
  
    }
 }

  var classRoww = this.state.allclasses
  var cls=[];
  var i=0;
  for(i=0; i<classRoww.length; i++){
    if(classRoww[i]["departmentId"]==e.target.value){
      cls.push(classRoww[i])
  
    }
    
  }

  this.setState({
    //departmentId: e.target.value,
    departmentId:_id,
    departmentName:deptname,
    classes:cls,
    //classes:mclass
  })

}
onCalender(e){
    this.setState({
      calender: e.target.value
    })
  }
onSubmit(e) {
 //console.log(this.state.FeesType,this.state.departmentName,this.state.calender)
    e.preventDefault();
  
    const obj = {
        FeesType: this.state.FeesType,
        departmentName:this.state.departmentName,
        calender:this.state.calender
    };
  
//    console.log(obj)
    
    axios.post(sAdd.ADDSERVER + '/Dues/addDues', obj)
        .then(res =>{
          console.log(res.data)
          if(res.data){
            console.log('sucess',res.data)
            alert("Create Dues")
             
      }
          else{
            console.log('Error')
          }
        } //console.log(res.data)
        );
    
    this.setState({
    departmentName:'',
    FeesType:'',
    calender:''
    })
  }
  
  render(){

  

    return(
      <div>
        <Home />
<div style={{minHeight: '1246.8px'}} className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
         
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
          <h3 style={{fontSize:40}}>Create Dues</h3>
        </div>
        {/* /.card-header */}
        {/* form start */}
        <form onSubmit={this.onSubmit} className="form-horizontal" style={{padding:20}}>

       <div className="card-body">
          <div className="form-group row">
              <label htmlFor="inputEmail3"  className="col-sm-4 col-form-label">Department:</label>
              <div className="col-sm-5">
              <select className="form-control" id="selectDept" onChange={this.selectedindex}>
         <option>please select department</option>
          {this.filloptions()}    
      </select>
                {/* <input className="form-control" id="inputEmail3" placeholder="class" type="number" /> */}
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputEmail3"  className="col-sm-4 col-form-label">Calender:</label>
              <div className="col-sm-5">
                <input className="form-control" 
                 value={this.state.calender}
                 onChange={this.onCalender}
                id="inputEmail3" placeholder="class" type="date" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">Fees Type:</label>
              <div className="col-sm-5">
              <select className="form-control" id="selectDept" onChange={this.selectedFees}>
         <option>please select Fees Type</option>
        
     {this.fillFeesOption()}     
      </select>
           
              </div>
              
            </div>
           
            <br />

            <div>
                        <button type="submit" className="btn btn-default float-right">Cancel</button>
                        <button type="submit" className="btn btn-info ">SUBMIT</button>

          </div>
          <br />
          <br />
                     
          </div>
          
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
export default createDues