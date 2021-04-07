import React from 'react'
//import { Link } from "react-router-dom";
import axios from 'axios'
import TableRow from './tableRow';
import history from '../../src/history'
import Home from '../../src/components/home'
//import fillOption from './tableRow'
const sAdd = require('../myDB')
class Department extends React.Component{
  constructor(props) {
    super(props);
    this.onDepartmentName = this.onDepartmentName.bind(this);
    this.onPrefix = this.onPrefix.bind(this);
    this.state = {business: []};
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        prefix:'',
        departmentName: '',
        business:[],
        detail:''
    }
}

componentDidMount(){
  //console.log('yes')
axios.get(sAdd.ADDSERVER + '/business')
  .then(response => {
    this.setState({ business: response.data });
  })
  .catch(function (error) {
    console.log(error);
  })
}

tabRow(){
  return this.state.business.map(function(object, i){
      return <TableRow obj={object} key={i} />;
  });
 
}

onPrefix(e){
  this.setState({
    prefix: e.target.value
  })
}
onDepartmentName(e) {
  this.setState({
    departmentName: e.target.value
  })  
}


onSubmit(e) {
    e.preventDefault();
    // var n = this.state.userId.search("-")
    // var schoolname= this.state.userId.slice(0,n)    
    var dtlarr ={name:"ok"}
    const obj = {
      //schoolName: schoolname,
      //users:[{
        
      //departmentId: this.state.departmentId,
      departmentName: this.state.departmentName,
      prefix: this.state.prefix,
      detail: dtlarr
     // }
    //  classes:[{
    //   classId:1 ,
    //   className: 'jaweriya'
    //   }
    // ],
    
  
    };
    console.log(obj)
    console.log('yes: data added on server')
    axios.post(sAdd.ADDSERVER + '/business/adddept', obj)
        .then(res =>{
          console.log(res.data)
          if(res.data){
            console.log('sucess',res.data)
            this.componentDidMount()
            alert('DEPARTMENT FORM SUBMIT')
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
     // options:[],
      business: [],
      //departmentId: '',
      departmentName: '',
      prefix: '',
      detail:''
      //business_gst_number: ''
    })

  }
  render(){
    //console.log('props=>',this.props.obj)
    
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
          <h3 style={{fontSize:40}}>Department</h3>
        </div>
        {/* /.card-header */}
        {/* form start */}
        <form className="form-horizontal" onSubmit={this.onSubmit} style={{padding:20}}>
          <div className="card-body">
            <div className="form-group row">
              <label htmlFor="inputEmail3"  className="col-sm-4 col-form-label">Department Name: *</label>
              <div className="col-sm-5">
                <input className="form-control"
                  value={this.state.departmentName}
                  onChange={this.onDepartmentName}
                id="inputEmail3" placeholder="Department Name" type="text" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">Prefix</label>
              <div className="col-sm-5">
                <input className="form-control" id="inputPassword3"
                 value={this.state.prefix}
                 onChange={this.onPrefix}
                placeholder="Prefix" type="text" />
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
            <table className="table table-bordered "  style={{paddingTop:50,textAlign:'center',marginTop:50,backgroundColor:'white',border:'1px solid black'}}>
            <thead> 
              <tr>
                <th>DEPARTMENT NAME</th>
                <th>PREFIX</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
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
export default Department