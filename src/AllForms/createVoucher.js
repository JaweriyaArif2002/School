import React from 'react'
import axios from 'axios'
import NamesContainer  from '../../src/AllForms/NamesContainer'
import Home from '../../src/components/home'
const sAdd = require('../myDB')
class createVoucher extends React.Component{
  constructor(props) {
    super(props);
   
  this.editSearchTerm  = this.editSearchTerm.bind(this)
this.dynamicSearch = this.dynamicSearch.bind(this)
  this.onRegstdID = this.onRegstdID.bind(this);
  this.ondueDate = this.ondueDate.bind(this);
this.onissueDate = this.onissueDate.bind(this);
this.onvalidityDate = this.onvalidityDate.bind(this);
this.onSubmit = this.onSubmit.bind(this);
this.onFeeDate = this.onFeeDate.bind(this);
  this.state = {names:[]};
  this.state = {stdnames:[]};
     this.state = {
       names: [],
       stdnames:[],
      searchTerm: '',
      regStdId:'',
      regStdName:'',
      allstddata:[],
      dueDate:'',
      issueDate:'',
      validityDate:'',
      DuesDetail:'',
      FeeDate:'',
      PDETAIL:'',
      SelectStudent:{},

    }

    
}

componentDidMount(){
 // console.log('yes')
axios.get(sAdd.ADDSERVER +'/Admission')
  .then(response => {
   // console.log(response.data)
    this.setState({ allstddata: response.data });

  })
  .catch(function (error) {
    console.log(error);
  })
}
editSearchTerm = (e) => {
   this.setState({searchTerm: e.target.value});
  
  var allStudentData=this.state.allstddata;
var i=0
var harray =[];
 for(i=0;i<allStudentData.length;i++){
     if(allStudentData[i]["fullName"]){
     
      console.log(allStudentData[i]["fullName"],allStudentData[i]["studentId"])
     harray.push('id:-' + allStudentData[i]["studentId"] + '  Name:-' +allStudentData[i]["fullName"]+'  Class:-'+ allStudentData[i]["class"])
          console.log('allstdarraty ',harray)
    }
  }
 // console.log('allstdarraty ',harray)
  this.setState({
        names:harray
  })
}

dynamicSearch = () => {
  //console.log('yes i m in dynamic search')
  return this.state.names.filter(ok => ok.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
//return this.state.names.filter(studentId => studentId.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
}
ondueDate(e){
   this.setState({
     dueDate: e.target.value
   })
   //console.log(e.target.value)
}
onissueDate(e){
  this.setState({
    issueDate:e.target.value
  })
  //console.log(e.target.value)
}
onvalidityDate(e){
  this.setState({
    validityDate:e.target.value
  })
 //console.log(e.target.value)
}
onFeeDate(e){
  // console.log(e.target.value)
  this.setState({
    FeeDate:e.target.value
  })
  //console.log(e.target.value)
}
onRegstdID(e){
  this.setState({
    regStdId: e.target.value
  })
  var allStudentData=this.state.allstddata;
  var i=0
  var stdarray =[];
  var pdetail={}
  var stddetail={} 
   for(i=0;i<allStudentData.length;i++){

    if(allStudentData[i]["studentId"]==e.target.value){
      stddetail=allStudentData[i]
      stdarray.push(allStudentData[i]["fullName"])
       pdetail=allStudentData[i]["feedetails"]
       //stddetail=allStudentData[i]["fullName"]
    // console.log(pdetail)
    //console.log(stddetail)
     }
   //console.log(pdetail)
  //console.log('lll i m from create voucher',pdetail)
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
   //console.log(ptabledata)

   //console.log(Object.entries(pdetail).length)

    for(i=0;i<Object.entries(pdetail).length; i++){
    //console.log(Object.entries(pdetail)[i]) 
     var sourceObject= Object.entries(pdetail)[i][1]
     var targetObject={}
     var retObject=[]
     //console.log(sourceObject)
     for(var j=0;j<ptabledata.length; j++){
       //console.log(ptabledata[i]["feestype"],'<=ptabledetail--pdetail=>',Object.entries(pdetail)[i][0])
       if(ptabledata[i]["feestype"]==Object.entries(pdetail)[i][0]){
//console.log('oooo')
           targetObject=ptabledata[i]
         //  console.log('target object',targetObject)
       targetObject=Object.assign(targetObject,sourceObject)

    
       }
 
     }
   
    }
  
  } 

}

 //console.log(pdetail)
    this.setState({
    
      stdnames:stdarray,
      SelectStudent:stddetail,
     PDETAIL:ptabledata
    })
    //console.log(stdarray)
}

onSubmit(e) {
  
   e.preventDefault();
    
 // console.log(this.state.stdnames)
// console.log(this.state.SelectStudent)
// console.log(this.state.issueDate ,'this issue')
// console.log(this.state.validityDate,'this validity') 



// const obj = {
  
//       // feedetails:allDetail,
//       DuesDetail:dtlarr
//     };
  var array=this.state.PDETAIL
  console.log(array,this.state.SelectStudent)
  for(var i=0; i<array.length; i++){
            array[i]['StudentKey']=this.state.SelectStudent['_id']
           array[i]['StudentId']=this.state.SelectStudent['studentId']
           array[i]['fullName']=this.state.SelectStudent['fullName']
           array[i]['fatherName']=this.state.SelectStudent['fatherName']
           array[i]['AdmissionDate']=this.state.SelectStudent['AdmDate']
           array[i]['departmentName']=this.state.SelectStudent['departmentName']
           array[i]['class']=this.state.SelectStudent['class']
           array[i]['dueDate']=this.state.dueDate
           array[i]['issueDate']=this.state.issueDate
           array[i]['validityDate']=this.state.validityDate
           array[i]['FeeDate']=this.state.FeeDate
          }
  console.log(array)
   // console.log(obj)
  
    axios.post(sAdd.ADDSERVER + '/Voucher/addVoucher',array)
        .then(res =>{
          console.log(res.data)
          if(res.data){
            console.log('sucess',res.data)
         alert('voucher')    
      }
          else{
            console.log('...Error')
            
          }
        } //console.log(res.data)
        );
    
    this.setState({
  
      array:''
  
    })
  }
  
  render(){
    

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
          <h3 style={{fontSize:40}}>Create Voucher</h3>
        </div>
        {/* /.card-header */}
        {/* form start */}
        <form className="form-horizontal" onSubmit={this.onSubmit} style={{padding:20}}>
          <div className="card-body">
            <div className="form-group row">
              <label htmlFor="inputEmail3"  className="col-sm-2 col-form-label">Search: </label>
              <div className="col-sm-5">
                <input className="form-control" value = {this.state.searchTerm}
                onChange = {this.editSearchTerm} style={{marginLeft:21,marginRight:10}} id="inputEmail3" placeholder="Searching..." type="text" />
              </div>
            </div>
            <br />
            <div className="form-group" style={{textAlign:'center',border: '1px solid black' }} >
          <NamesContainer names = {this.dynamicSearch()}/>
          </div>
            <div className="form-group row" style={{marginLeft:3}}>
              <label htmlFor="inputPassword3" className="col-form-label">Reg Student Id:</label>
              <div className="col-sm-2">
                <input className="form-control" id="inputPassword3" 
                 value = {this.state.regStdId}
                 onChange = {this.onRegstdID}
                    placeholder="Id" type="number" />
              </div>
              <label  className="col-form-label">Reg Student Name:</label>
              <div className="col-sm-5">
                <input className="form-control" id="inputPassword3" 
                    value = {this.state.stdnames}
                    onChange = {this.onRegstdID}
                    placeholder="Registred Student Name" type="text" />
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label htmlFor="inputEmail3"  className="col-sm-2 col-form-label">Due Date:</label>
              <div className="col-sm-4">
                <input className="form-control"  value = {this.state.dueDate}
                onChange = {this.ondueDate} style={{marginLeft:21,marginRight:10}} id="inputEmail3" placeholder="Searching..." type="date" />
              </div>
            </div>
<br />
            <div className="form-group row">
              <label htmlFor="inputEmail3"  className="col-sm-2 col-form-label">Issue Date:</label>
              <div className="col-sm-4">
                <input className="form-control"  value = {this.state.issueDate}
                onChange = {this.onissueDate}style={{marginLeft:21,marginRight:10}} id="inputEmail3" placeholder="Searching..." type="date" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputEmail3"  className="col-sm-2 col-form-label">Validity Date:</label>
              <div className="col-sm-4">
                <input className="form-control" value = {this.state.validityDate}
                onChange = {this.onvalidityDate} style={{marginLeft:21,marginRight:10}} id="inputEmail3" placeholder="Searching..." type="date" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputEmail3"  className="col-sm-2 col-form-label">Fee Date:</label>
              <div className="col-sm-4">
                <input className="form-control"  value = {this.state.FeeDate}
                onChange = {this.onFeeDate} style={{marginLeft:21,marginRight:10}} id="inputEmail3" placeholder="Searching..." type="date" />
              </div>
            </div>
            <div>
                        <button type="submit" className="btn btn-default float-right">Cancel</button>
                        <button type="submit" className="btn btn-info ">SUBMIT</button>

          </div>
          <br />
          <br />
            
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







 <div>
     
 
      <div  className="container-lg" style={{width:500,height:800,backgroundColor:'white',padding:20,border:'3px solid #f1f1f1'}}>
    
      <h3 style={{textAlign:'center',fontWeight:'bold',padding:20 ,color:'#1985b0',backgroundColor:'whitesmoke', border:'2px solid lightgray'}}>CREATE VOUCHER</h3>
      <form onSubmit={this.onSubmit}> 
    <div className="form-group" >
              <label style={{fontWeight:'bold',}}>SEARCH NAME  </label>
              <input 
                type="text" 
                className="form-control" 
                value = {this.state.searchTerm}
                onChange = {this.editSearchTerm}
                style={{backgroundColor:'whitesmoke'}}
                placeholder="Search for a name!.."
                />
                   
          </div>
          <div className="form-group" style={{textAlign:'center',border: '1px solid black' }} >
          <NamesContainer names = {this.dynamicSearch()}/>
          </div>

                          <div className="row">
        <div className="col">
          <label>REGISTRED StudentId</label>
          <input type="text" className="form-control" value = {this.state.regStdId}
                onChange = {this.onRegstdID} placeholder="" aria-label="First name" />
        </div>
        <div className="col">
        <label>REGISTRED StudentName </label>
          <input type="text" className="form-control" 
          value = {this.state.stdnames}
          onChange = {this.onRegstdID} placeholder="" aria-label="Last name" />
        </div>
      </div>
      <div className="col">
          <label>DUE DATE</label>
          <input type="date" className="form-control" value = {this.state.dueDate}
                onChange = {this.ondueDate} placeholder="" aria-label="First name" />
        </div>
        <div className="col">
          <label>ISSUE DATE</label>
          <input type="date" className="form-control" value = {this.state.issueDate}
                onChange = {this.onissueDate} placeholder="" aria-label="First name" />
        </div>
        <div className="col">
          <label>VALIDITY DATE</label>
          <input type="date" className="form-control" value = {this.state.validityDate}
                onChange = {this.onvalidityDate} placeholder="" aria-label="First name" />
        </div>
        <div className="col">
          <label>FEE DATE</label>
          <input type="date" className="form-control" value = {this.state.FeeDate}
                onChange = {this.onFeeDate} placeholder="" aria-label="First name" />
        </div>
       <br /> 
          <button type="submit"  value="submit" class="btn btn-primary position-relative">
  Submit <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle  p-2"><span class="visually-hidden"></span></span>
</button>
      </form>
      </div> 
      {/* <p id="demo"></p> */}
{/* </div> */}
</div>

</div>
    )

    
  }
}
export default createVoucher