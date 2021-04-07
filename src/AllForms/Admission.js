import React from 'react'
import axios from 'axios'
import Option from './option'
import TableRow from './admissionRow'
import FeeRow from './feeRow'
import Home from '../../src/components/home'
const sAdd = require('../myDB')

class Admission extends React.Component{
  constructor(props) {
    super(props);

 this.onStudentId =this.onStudentId.bind(this);
    this.onFullName= this.onFullName.bind(this);
     this.onFName= this.onFName.bind(this);
    this.onDOB= this.onDOB.bind(this);
     this.onBform= this.onBform.bind(this);
     this.onAdDate= this.onAdDate.bind(this);
   this.onFcnic= this.onFcnic.bind(this);
     this.onFcell= this.onFcell.bind(this);
   this.onFemail= this.onFemail.bind(this);
     this.onFqualification= this.onFqualification.bind(this);
     this.onFoccupation= this.onFoccupation.bind(this);
     this.onMname= this.onMname.bind(this);
     this.onMcnic= this.onMcnic.bind(this);
     this.Submit = this.Submit.bind(this);
     this.fillClasses= this.fillClasses.bind(this);
     this.selectedindex = this.selectedindex.bind(this);
    this.onPackageId= this.onPackageId.bind(this);
    this.fillTable = this.fillTable.bind(this)
    this.state = {allFeesType:[]};
     this.state = {allclasses:[]};
     this.state = {classes:[]};
    this.state ={ allFeesDetails:[]};
     this.state ={
       studentId: '',
       fullName: '',
       fatherName:'',
       DOB:'',
       Bform:'',
       AdmDate:'',
       fatherCnic:'',
       fatherCell:'',
       fatherEmail:'',
       fatherQualification:'',
       fatherOccupation:'',
       motherName:'',
       motherCnic:'',
       allFeesType:[],
       business:[],
       allclasses:[],
       classes:[],
       allFeesDetails:[],
       departmentName:'',
      class:'',
      feepackageId:'',
      feepackagePK:'',
      feepackagename:'',
      feedetails:'',
      selectedPkgFee:[],
      }
    
  
 }
 componentDidMount(){
  // console.log('yes')
 axios.get(sAdd.ADDSERVER + '/feetype')
   .then(response => {
    // console.log(response.data)
     this.setState({ allFeesType: response.data });
     axios.get(sAdd.ADDSERVER + '/business')
     .then(response => {
      // console.log(response.data)
       this.setState({ business: response.data });
       axios.get(sAdd.ADDSERVER + '/class')
       .then(response => {
         this.setState({ allclasses: response.data });
         axios.get(sAdd.ADDSERVER + '/FEE')
   .then(response => {
    // console.log(response.data)
     this.setState({ allFeesDetails: response.data });
     //this.setState({ tables: response.data });
   })
   .catch(function (error) {
    //  console.log(error);
   })
 
     })
       .catch(function (error) {
        //  console.log(error);
       })
     })
     .catch(function (error) {
      //  console.log(error);
     })
   })
   .catch(function (error) {
    //  console.log(error);
   })
 }
 onPackageId(e){
 
  var allFees = this.state.allFeesDetails
   console.log('helllo yar i m here',allFees)
   var i=0;
   var pdetail={}
   var objfeedetails={}
   var pk=""
   var fpname=""
   for(i=0; i<allFees.length; i++){
    //  console.log('yes i reached')
     if(allFees[i]["feepackageId"]==e.target.value){
     
       pk = allFees[i]["_id"]
       pdetail= allFees[i]["feedetails"]
      fpname=allFees[i]["feepackageName"]
      console.log(pk,pdetail,fpname)
     }
console.log('lllll im admission.js',pdetail)
     var pdetaikeys=[]
     var ptabledata=[]
     //console.log('pdetail',pdetail,pdetail,Object.entries(pdetail).length)
     if(Object.entries(pdetail).length===0){  
     }
     else{
      pdetaikeys =  Object.keys(pdetail)
       
      for(i=0; i<pdetaikeys.length; i++){
       var anObj={}
        //console.log(pdetaikeys[i])
        anObj["feestype"]=pdetaikeys[i]
        //console.log(anObj)
        ptabledata.push(anObj)
      }
      console.log(ptabledata)

      console.log(Object.entries(pdetail).length)

       for(i=0;i<Object.entries(pdetail).length; i++){
       console.log(Object.entries(pdetail)[i]) 
        var sourceObject= Object.entries(pdetail)[i][1]
        var targetObject={}
        var retObject=[]
        console.log(sourceObject)
        for(var j=0;j<ptabledata.length; j++){
          console.log(ptabledata[i]["feestype"],'<=ptabledetail--pdetail=>',Object.entries(pdetail)[i][0])
          if(ptabledata[i]["feestype"]==Object.entries(pdetail)[i][0]){
console.log('oooo')
              targetObject=ptabledata[i]
              console.log('target object',targetObject)

              targetObject=Object.assign(targetObject,sourceObject)

              console.log('target object after',targetObject)
          }
        }
       }
      


      
       
       
        // for(var key in pdetail){
        //        var anObj={}
        //   console.log('fee details',Object.keys(pdetail))
        // }
     }
     //console.log(pdetail)
 
   }
 this.setState({
    feepackageId: e.target.value,
    selectedPkgFee:ptabledata,
    feepackagePK:  pk,
    
  })

  // console.log(e.target.value)
 }
 fillTable(allfees){
  //console.log('yes fill table')
  //console.log(this.state.selectedPkgFee)
//console.log(this.state.allFees)
    return this.state.selectedPkgFee.map(function(object, i){
    // console.log(object)
     return <FeeRow obj={object} key={i} />;
    
 });
}
 onStudentId(e){
    this.setState({
      studentId: e.target.value
    });
  }
  onFullName(e){
    this.setState({
      fullName: e.target.value
    });
  }
  onFName(e){
    this.setState({
      fatherName: e.target.value
    });
  }
  onDOB(e){
    this.setState({
      DOB: e.target.value
    });
  }
  onBform(e){
    this.setState({
      Bform: e.target.value
    });
  }
  onAdDate(e){
    this.setState({
      AdmDate: e.target.value
    });
  }
  onFcnic(e){
    this.setState({
      fatherCnic: e.target.value
    });
  }
  onFcell(e){
    this.setState({
      fatherCell: e.target.value
    });
  }
  
  onFemail(e){
    this.setState({
      fatherEmail: e.target.value
    });
  }
  onFqualification(e){
    this.setState({
      fatherQualification: e.target.value
    });
  }
  onFoccupation(e){
    this.setState({
      fatherOccupation: e.target.value
    });
  }
  onMname(e){
    this.setState({
      motherName: e.target.value
    });
  }
  onMcnic(e){
    this.setState({
      motherCnic: e.target.value
    });
  }
  filloptions(){
    // console.log(this.state.allclasses)
    //console.log(this.state.business)
    return this.state.business.map(function(object, i){
      return <Option obj={object} key={i} />

    }
      )

      
  }
  selectedindex(e){
    var dept=this.state.business;
 var deptname=""
 var i=0
// console.log(dept)
 var mclass=[]
//  console.log(e.target.value)
 var _id=""
 for(i=0;i<dept.length;i++){
  //  console.log('im in dept loop')
   
    if(dept[i]["_id"]==e.target.value){
      // console.log('yes i Reaced')
      deptname=dept[i]["departmentName"]

     
    }
 }
// console.log('yes i m fire')
     var classRoww = this.state.allclasses
    //  console.log(classRoww)
    var classname=""
     var cls=[];
     var i=0;
     for(i=0; i<classRoww.length; i++){
      //  console.log('yes i reached')
       if(classRoww[i]["departmentId"]==e.target.value){
         cls.push(classRoww[i])
             classname=classRoww[i]["class"]
             console.log('classnamehere',classname)
       }
      // console.log('cls ',cls)
     }
    //  console.log(deptname,'select dpname')   
     this.setState({

       classes:cls,
       departmentName:deptname,
       class:classname
     })
   
   
   }
  fillClasses(){
    return this.state.classes.map(function(object, i){
      // console.log(object)
      return <TableRow obj={object} key={i} />;})
  }
Submit(e) {
  // console.log('ok')
  e.preventDefault();
  let fees=this.state.allFeesType
  // console.log('allfeesdetail here',this.state.allFeesType)
  
  var i=0
  var allDetail={}
  for(i=0;i<fees.length;i++){

    
    
    var feesType =fees[i]["feesType"]
    allDetail[feesType]={
           code:fees[i]["code"],
           amount:fees[i]["amount"]
  
         }
        }
    // console.log(this.state.allFeesType)
  
  const obj = {
    studentId: this.state.studentId,
    fullName: this.state.fullName,
    fatherName: this.state.fatherName,
    DOB:this.state.DOB,
    Bform: this.state.Bform,
    AdmDate: this.state.AdmDate,
    fatherCnic:this.state.fatherCnic,
    fatherCell: this.state.fatherCell,

    fatherEmail:this.state.fatherEmail,
    fatherQualification:this.state.fatherQualification,
    fatherOccupation:this.state.fatherOccupation,
    motherName:this.state.motherName,
    motherCnic:this.state.motherCnic,
    feedetails:allDetail,
    departmentName:this.state.departmentName,
    class:this.state.class,
    DuesDetail:{initvalue:"InitValue"}

  }
  console.log(obj)
    //axios.post(sAdd.ADDSERVER + '/business/updatearray', obj)
    axios.post(sAdd.ADDSERVER + '/Admission/addAdmission', obj)
        .then(res =>{
          // console.log(res.data)
          if(res.data){
            // console.log('sucess',res.data)
           alert('Admission form Submit')  
      }
          else{
            // console.log('Error')
          }
        } //console.log(res.data)
        );
    

this.setState({
  studentId: '',
  fullName: '',
  fatherName:'',
  DOB:'',
  Bform:'',
  AdmDate:'',
  fatherCnic:'',
  fatherCell:'',
  fatherEmail:'',
  fatherQualification:'',
  fatherOccupation:'',
  motherName:'',
  motherCnic:'',

})
  
  
}

  
    render(){
        return(
          <div>


          <div style={{backgroundColor:'white'}}>
      <Home />
      <h3 className="container" style={{width:'50%',backgroundColor:'white',padding:20,fontWeight:'bold' ,color:'black'}}>Registration</h3> 
      <div  className="container" style={{width:'60%',backgroundColor:'white',padding:20,border:'1px solid black',borderRadius:'10px',marginTop:10}}>
    

       {/* <form > */}

    {/* <h4 style={{fontWeight:'bold'}}>STUDENT INFORMATION</h4> */}
    {/* <fieldset style={{border:'2px solid lightgray'}}> */}
    <div className="form-group" >
              <label style={{fontSize:25,color:'black',fontFamily:'initial'}}>Student Id: *  </label>
              <input 
                type="text" 
                className="form-control" 
                value={this.state.studentId}
                onChange={this.onStudentId}
              style={{fontSize:10,border:'1px solid black', boxShadow: '3px 3px 3px 3px #f1f1f1',width:300}}
                placeholder=" student id"
                />
          </div>
          <div className="row">
        <div className="col">
          <label style={{fontSize:15,color:'black',fontFamily:'initial'}}>Full Name: *</label>
          <input 
                type="text" 
                className="form-control" 
                value={this.state.fullName}
                onChange={this.onFullName}
                style={{fontSize:10,border:'1px solid black', boxShadow: '3px 3px 3px 3px #f1f1f1'}}
                placeholder="full name"
                />
        </div>
        <div className="col">
        <label style={{fontSize:15,color:'black',fontFamily:'initial'}}>Father Name: *</label>
        <input 
                type="text" 
                className="form-control" 
                value={this.state.fatherName}
                onChange={this.onFName}
                style={{fontSize:10,border:'1px solid black', boxShadow: '3px 3px 3px 3px #f1f1f1'}}
                placeholder="father name"
                />
        </div>
      </div>
          {/* <div className="form-group" >
              <label style={{fontWeight:'bold'}}>FULL NAME*  </label>
              <input 
                type="text" 
                className="form-control" 
                value={this.state.fullName}
                onChange={this.onFullName}
                style={{backgroundColor:'whitesmoke'}}
                placeholder="enter full name.."
                />
          </div>
          <div className="form-group" >
              <label style={{fontWeight:'bold'}}>FATHER NAME*  </label>
              <input 
                type="text" 
                className="form-control" 
                value={this.state.fatherName}
                onChange={this.onFName}
                style={{backgroundColor:'whitesmoke'}}
                placeholder="enter father name.."
                />
          </div>*/}
          <div className="form-group" > 
              <label style={{marginTop:15,fontSize:15,color:'black',fontFamily:'initial'}}>DOB  </label>
              <input 
                type="date" 
                className="form-control" 
                value={this.state.DOB}
                onChange={this.onDOB}
                style={{border:'1px solid black',fontSize:10, boxShadow: '3px 3px 3px 3px #f1f1f1',width:300}}
                placeholder="enter student id.."
                />
          </div>
          <div className="form-group" >
              <label style={{fontSize:15,color:'black',fontFamily:'initial'}}>B-Form </label>
              <input 
                type="text" 
                className="form-control" 
                value={this.state.Bform}
                onChange={this.onBform}
                style={{fontSize:10,border:'1px solid black',boxShadow: '3px 3px 3px 3px #f1f1f1',width:300}}
                placeholder="b-from"
                />
          </div>
         <div className="form-group" >
              <label style={{fontSize:15,color:'black',fontFamily:'initial'}}>Admission Date  </label>
              <input 
                type="date" 
                className="form-control" 
                value={this.state.AdmDate}
                onChange={this.onAdDate}
                style={{fontSize:10,border:'1px solid black', boxShadow: '3px 3px 3px 3px #f1f1f1',width:300}}
                placeholder="enter student id.."
                />
          </div>
      <div>
      <label style={{fontSize:15,color:'black',fontFamily:'initial'}} >Department   </label>
     <select   style={{fontSize:13, boxShadow: '3px 3px 3px 3px #f1f1f1',width:200 ,marginLeft:10}} onChange={this.selectedindex}>
      <option>please select department</option>
          {this.filloptions()}    
      </select>
      </div>
      <div>
      <label style={{fontSize:15,color:'black',fontFamily:'initial'}} >CLASS  </label>
     <select   style={{fontSize:10, boxShadow: '3px 3px 3px 3px #f1f1f1',width:300}}>
      <option>please select class</option>
          {this.fillClasses()}    
      </select>
     
      </div>

      <div className="form-group" >
              <label style={{fontSize:15,color:'black',fontFamily:'initial'}}>FEE PACKAGE ID </label>
              <input 
                type="text" 
                className="form-control" 
                value={this.state.feepackageId}
                onChange={this.onPackageId}
                style={{fontSize:10, boxShadow: '3px 3px 3px 3px #f1f1f1',width:300}}
                placeholder="enter fee package id .."
                />
          </div>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>FEES TYPE </th>
                <th>CODE</th>
                <th>AMOUNT</th>
              </tr>
              
            </thead>
            <tbody>
              { this.fillTable() }
            </tbody>
          </table>
         {/* </fieldset> */}
         {/* <h4 style={{fontSize:15,color:'black',fontFamily:'initial'}}>FATHER INFORMATION</h4> */}
    {/* <legend>FATHER INFORMATION</legend> */}
    {/* <fieldset style={{border:'2px solid lightgray'}}> */}
       
    <div className="form-group" >
              <label style={{fontSize:15,color:'black',fontFamily:'initial'}}>CNIC  </label>
              <input 
                type="text" 
                className="form-control" 
                value={this.state.fatherCnic}
                onChange={this.onFcnic}
                style={{fontSize:10, boxShadow: '3px 3px 3px 3px #f1f1f1',width:300}}
                placeholder="enter cnic.."
                />
          </div>
          <div className="form-group" >
              <label style={{fontSize:15,color:'black',fontFamily:'initial'}}>CELL NO  </label>
              <input 
                type="text" 
                className="form-control" 
                value={this.state.fatherCell}
                onChange={this.onFcell}
                style={{fontSize:10, boxShadow: '3px 3px 3px 3px #f1f1f1',width:300}}
                placeholder="enter father cell number.."
                />
          </div>
          <div className="form-group" >
              <label style={{fontSize:15,color:'black',fontFamily:'initial'}}>FATHER EMAIL  </label>
              <input 
                type="text" 
                className="form-control" 
                value={this.state.fatherEmail}
                onChange={this.onFemail}
                style={{fontSize:10, boxShadow: '3px 3px 3px 3px #f1f1f1',width:300}}
                placeholder="enter father email.."
                />
          </div>
          <div className="form-group" >
              <label style={{fontSize:15,color:'black',fontFamily:'initial'}}>FATHER QUALIFICATION  </label>
              <input 
                type="text" 
                className="form-control" 
                value={this.state.fatherQualification}
                onChange={this.onFqualification}
                style={{fontSize:10, boxShadow: '3px 3px 3px 3px #f1f1f1',width:300}}
                placeholder="enter father qualification.."
                />
          </div>
          <div className="form-group" >
              <label style={{fontSize:15,color:'black',fontFamily:'initial'}}>FATHER OCCUPATION  </label>
              <input 
                type="text" 
                className="form-control" 
                value={this.state.fatherOccupation}
                onChange={this.onFoccupation}
                style={{fontSize:10, boxShadow: '3px 3px 3px 3px #f1f1f1',width:300}}
                placeholder="enter father occupation.."
                />
          </div>
         {/* </fieldset> */}
         {/* <h4 style={{fontWeight:'bold'}}>MOTHER INFORMATION</h4> */}
    {/* <legend>MOTHER INFORMATION</legend> */}
    {/* <fieldset style={{border:'2px solid lightgray'}}> */}
    <div className="form-group" >
              <label style={{fontSize:15,color:'black',fontFamily:'initial'}}>MOTHER NAME  </label>
              <input 
                type="text" 
                className="form-control" 
                value={this.state.motherName}
                onChange={this.onMname}
                style={{fontSize:10, boxShadow: '3px 3px 3px 3px #f1f1f1',width:300}}
                placeholder="enter mother name.."
                />
          </div>   
          <div className="form-group" >
              <label style={{fontSize:15,color:'black',fontFamily:'initial'}}>MOTHER CNIC  </label>
              <input 
                type="text" 
                className="form-control" 
                value={this.state.motherCnic}
                onChange={this.onMcnic}
                style={{fontSize:10, boxShadow: '3px 3px 3px 3px #f1f1f1',width:300}}
                placeholder="enter mother cnic.."
                />
          </div>{/* <div className="mb-3">
         <label htmlFor="username">CELL NO</label>
         <div className="input-group">
          <input type="number" className="form-control" id="username" placeholder="ENTER cell no..." required />
           <div className="invalid-feedback" style={{width: '100%'}}>
             Your username is required.
           </div>
         </div>
       </div>
       <div className="mb-3">
         <label htmlFor="username">EMAIL</label>
         <div className="input-group">
          <input type="email" className="form-control" id="username" placeholder="ENTER example@gamil.com..." required />
           <div className="invalid-feedback" style={{width: '100%'}}>
             Your username is required.
           </div>
         </div>
       </div>
       <div className="mb-3">
         <label htmlFor="username">QUALIFICATION</label>
         <div className="input-group">
          <input type="text" className="form-control" id="username" placeholder="ENTER qualification..." required />
           <div className="invalid-feedback" style={{width: '100%'}}>
             Your username is required.
           </div>
         </div>
       </div>
        */}
       
         {/* </fieldset> */}
         <br />
         <div className="form-group">
              <input type="submit"  style={{backgroundColor:'#13b0a6',margin:'50'}} onClick={this.Submit}  className="btn btn-primary"/>
          </div>
          {/* <button onClick={this.Submit}>SUBMIT</button> */}
     {/* </form> */}
  </div>
</div>  
</div>
        )
    }
}
export default Admission