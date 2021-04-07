import React from 'react'
import axios from 'axios'
import TableRow from './feeTypeRow';
import Home from '../../src/components/home'
const sAdd = require('../myDB')
class feesType extends React.Component{
  constructor(props) {
    super(props);
    this.onfeesType = this.onfeesType.bind(this);
    this.onCode = this.onCode.bind(this);
    this.state = {business: []};
    this.onSubmit = this.onSubmit.bind(this);
   //this.onAmount = this.onAmount.bind(this)
    this.state = {
        feesType: '',
        code:'',
        amount: '',
        business:[],
        }
}

componentDidMount(){
  //console.log('yes')
axios.get(sAdd.ADDSERVER + '/feetype')
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
// fill(){
//   return this.state.options.map(function(object, i){
//       return <fillOption obj={object} key={i} />;
//   });
// }

// onDepartmentId(e) {
//   this.setState({
//     departmentId: e.target.value
//   });
// }
onfeesType(e){
  this.setState({
    feesType: e.target.value
  })
}
// onAmount(e){
//   this.setState({
//     amount: e.target.value
//   })
// }
onCode(e) {
  this.setState({
    code: e.target.value
  })  
}


onSubmit(e) {
    e.preventDefault();
        const obj = {
      feesType: this.state.feesType,
      code: this.state.code,
      amount:0
    };
    console.log(obj)
    axios.post(sAdd.ADDSERVER + '/feetype/addfeesType', obj)
        .then(res =>{
          console.log(res.data)
          if(res.data){
            console.log('sucess',res.data)
            this.componentDidMount()
             }
          else{
            console.log('Error')
          }
        } //console.log(res.data)
        );
    
    this.setState({

 
      feesType: '',
      code: '',
      amount:'',
      business: [],
      
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
          <h3 style={{fontSize:40}}>Fees Type</h3>
        </div>
        {/* /.card-header */}
        {/* form start */}
        <form onSubmit={this.onSubmit} className="form-horizontal" style={{padding:20}}>
          <div className="card-body">
            <div className="form-group row">
              <label htmlFor="inputEmail3"  className="col-sm-4 col-form-label">Fees Type:</label>
              <div className="col-sm-5">
                <input className="form-control" 
                value={this.state.feesType}
                onChange={this.onfeesType} id="inputEmail3" placeholder="Fees Type" type="text" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">Code: *</label>
              <div className="col-sm-5">
                <input className="form-control" value={this.state.code}
                onChange={this.onCode} id="inputPassword3" placeholder="Code" type="text" />
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
                <th>FEES TYPE</th>
                <th>CODE</th>
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
      
      <div style={{backgroundColor:'whitesmoke'}}>
      <Home />
      <div  className="container-lg" style={{marginTop:30,width:500,backgroundColor:'white',padding:20,border:'3px solid #f1f1f1'}}>
      <h3 style={{textAlign:'center',fontWeight:'bold',padding:20 ,color:'#1985b0',backgroundColor:'whitesmoke', border:'2px solid lightgray'}}>FEES TYPE</h3>
      <form onSubmit={this.onSubmit}>
          <div className="form-group">
              <label style={{fontWeight:'bold'}}>FEES TYPE  </label>
              <input 
                type="text" 
                className="form-control" 
                value={this.state.feesType}
                onChange={this.onfeesType}
                placeholder="enter fees type"
                style={{backgroundColor:'whitesmoke'}}
                />
          </div>
          <div className="form-group">
              <label style={{fontWeight:'bold'}}>CODE</label>
              <input type="text" 
                className="form-control"
                value={this.state.code}
                onChange={this.onCode}
                placeholder="enter code"
                style={{backgroundColor:'whitesmoke'}}
                />
          </div>
          {/* <div className="form-group">
              <label>AMOUNT</label>
              <input type="text" 
                className="form-control"
                value={this.state.amount}
                onChange={this.onAmount}
                />
          </div> */}
         
          <div className="form-group">
              <input type="submit" value="Submit" style={{backgroundColor:'#13b0a6'}}  type="submit"  className="btn btn-primary" className="btn btn-primary"/>
          </div>
          
      </form>
      <table className="table table-striped" style={{ marginTop: 20 ,textAlign:'center' }}>
            <thead>
              <tr>
                <th>FEES TYPE</th>
                <th>CODE</th>
                <th>EDIT</th>
                <th>DELETE</th>
                {/* <th>AMOUNT</th> */}
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
  </div>
  </div>
    )

    
  }
}
export default feesType