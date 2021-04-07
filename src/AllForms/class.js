import React from 'react'
//import { Link } from "react-router-dom";
import axios from 'axios'
import Home from '../../src/components/home'

import Option from './option'

import TableRow from './classRow'
const sAdd = require('../myDB')
class ClassApp extends React.Component{
  constructor(props) {
    super(props);
    this.onClass = this.onClass.bind(this);
    this.onshortName = this.onshortName.bind(this);
    this.onSection = this.onSection.bind(this);
  //  this.state = {business: []};
 //   this.onClass = this.onClassId.bind(this);
  //  this.onClassName = this.onClassName.bind(this);
    this.state = {business: []};
    this.state = {classes:[]};
    this.state = {allclasses:[]};
//    this.state = {tables:[]};
//this.fillTable = this.fillTable.bind(this)
    this.onSubmit = this.onSubmit.bind(this);
    this.selectedindex=this.selectedindex.bind(this)    

    this.state = {
        
       // classId: '',
       // className: '',
       _id:'',
    departmentId: '',
      departmentName: '',
      class: '',
      shortName:'',
      section:'',
        business:[],
        classes:[],
        allclasses:[]
    }

    
}

componentDidMount(){
 // console.log('yes')
axios.get(sAdd.ADDSERVER + '/business')
  .then(response => {
   // console.log(response.data)
    this.setState({ business: response.data });
    axios.get(sAdd.ADDSERVER + '/class')
    .then(response => {
      this.setState({ allclasses: response.data });
  })
    .catch(function (error) {
      console.log(error);
    })  
    
  })
  .catch(function (error) {
    console.log(error);
  })
}

filloptions(){
  //console.log(this.state)
  return this.state.business.map(function(object, i){
    return <Option obj={object} key={i} />;
      
});
  
}

// onDepartmentName(){
//   departmentName: e.target.value
// }
// onClassId(e) {
//   this.setState({
//     classId: e.target.value
//   });
// }
// onClassName(e) {
//   this.setState({
//     className: e.target.value
//   })  
// }
onClass(e){
  this.setState({
    class: e.target.value
  })
}
onshortName(e){
  this.setState({
    shortName: e.target.value
  })
}
onSection(e){
  this.setState({
    section: e.target.value
  })
}
selectedindex(e){
 // var sel=document.getElementById("selectDept")
// console.log(this.state.business)
 var dept=this.state.business;
 var deptname=""
 var i=0
console.log(dept)
 var mclass=[]
 console.log(e.target.value)
 var _id=""
 for(i=0;i<dept.length;i++){
    if(dept[i]["_id"]==e.target.value){
      console.log('yes i Reaced')
      deptname=dept[i]["departmentName"]
      _id=dept[i]["_id"]
     //mclass=dept[i]["allclasses"]
      //console.log(mclass)
    }
 }

  //console.log('asif k',e.target.value,deptname,this.state.departmentName,'yes got',this.state._id,this.state.classes)
  //console('mclass',mclass)


  var classRoww = this.state.allclasses
  var cls=[];
  var i=0;
  for(i=0; i<classRoww.length; i++){
    if(classRoww[i]["departmentId"]==e.target.value){
      cls.push(classRoww[i])
          //  console.log('cls ',cls)
    }
    
  }

  this.setState({
    //departmentId: e.target.value,
    departmentId:_id,
    departmentName:deptname,
    classes:cls,
    //classes:mclass
  })

  //console.log('state class array',this.state.allclasses)
  
//   return this.state.tables.map(function(object, i){
//     return <mclass obj={object} key={i} />;
     
// });
this.fillTable(e.target.value)
}
fillTable(did){
  //console.log(this.state)
  
  //var classRoww = this.state.allclasses
 //console.log(classRoww)
 //console.log(did)
  // var cls=[];
  // var i=0;
  // for(i=0; i<classRoww.length; i++){
  //   if(classRoww[i]["departmentId"]==did){
  //     cls.push(classRoww[i])     
  //   }
    
  // }
 // console.log(cls)
  // this.setState({
  //   classes:cls
  // })
  // console.log(classRow,'classRow here')
  
  return this.state.classes.map(function(object, i){
    console.log(object)
    return <TableRow obj={object} key={i} />;
     
});

console.log('Ok',this.state.classes)

}
onSubmit(e) {
    e.preventDefault();
    // var n = this.state.userId.search("-")
    // var schoolname= this.state.userId.slice(0,n)
   // var classes=this.state.classes;
   // var objCl={classId: this.state.classId,className:this.state.className}
    //classes.push(objCl)   
    //console.log('-id',this.state._id) 
    const obj = {
      //schoolName: schoolname,
      //users:[{
        //_id:this.state._id,
      departmentId:this.state.departmentId,// this.state.departmentId,
      departmentName:this.state.departmentName,
      class:this.state.class,
      shortName:this.state.shortName,
      section:this.state.section,
      //classes:classes,
      // classes:[{
      // classId: this.state.classId,
      // className: this.state.className,
      // }]
      //departmentName: this.state.departmentName
     // }
    //],
  
    };
    //console.log(obj,this.props.match)
    console.log(obj)
    //axios.post(sAdd.ADDSERVER + '/business/updatearray', obj)
    axios.post(sAdd.ADDSERVER + '/class/addClass', obj)
        .then(res =>{
          console.log(res.data)
          if(res.data){
            console.log('sucess',res.data)
            alert("class form submit")
            window.location.reload()
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
      business: [],
      class: '',
      shortName: '',
      departmentId:'',
    departmentName: '',
    section:''
  //    tables: []
  //_id:''

    })
  }
  
  render(){
    //let { dpt} = this.state
    // console.log('props=>',this.props.obj)
  

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
          <h3 style={{fontSize:40}}>Class</h3>
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
              <label htmlFor="inputEmail3"  className="col-sm-4 col-form-label">Class: *</label>
              <div className="col-sm-5">
                <input className="form-control" 
                 value={this.state.class}
                 onChange={this.onClass}
                id="inputEmail3" placeholder="class" type="number" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">Short Name: *</label>
              <div className="col-sm-5">
                <input className="form-control"
                  value={this.state.shortName}
                  onChange={this.onshortName} id="inputPassword3" placeholder="short Name" type="text" />
              </div>
              
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">Section:</label>
              <div className="col-sm-5">
                <input className="form-control"
                 value={this.state.section}
                 onChange={this.onSection} id="inputPassword3" placeholder="Section" type="text" />
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
            <table className="table table-bordered "  style={{paddingTop:50,textAlign:'center',marginTop:50}}>
            <thead> 
              <tr>
                <th>CLASS</th>
                <th>SHORT NAME</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
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
export default ClassApp