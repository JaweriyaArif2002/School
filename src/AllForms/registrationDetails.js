import React from 'react'
import axios from 'axios'
import Home from '../../src/components/home'
import TableRow from './regdtlsRow'
const sAdd = require('../myDB')
class RegDetail extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {business: []};
    this.state = {
      business:[],
  }
}

componentDidMount(){
 // console.log('yes')
axios.get(sAdd.ADDSERVER + '/Admission')
  .then(response => {
   // console.log(response.data)
    this.setState({ business: response.data });
  })
  .catch(function (error) {
    console.log(error);
  })
}
fillTable(){
  //console.log(this.state.business)
  return this.state.business.map(function(object, i){
    console.log(object)
    return <TableRow obj={object} key={i} />;
     
});



}
  render(){
    return(
      <div>
        <Home />
<div style={{minHeight: '1246.8px'}} className="content-wrapper">
        <section className="content-header">
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
     <div className="col-md-9">
                <div className="card card-info">
        <div style={{fontWeight:'bold',padding:20,fontSize:30}} className="card-header">
          <h3 style={{fontSize:40}}>Registration Details</h3>
        </div>
        <form  className="form-horizontal" style={{padding:20}}>
       <div className="card-body">
              <div className="card-footer">
            <table className="table table-bordered "  style={{paddingTop:50,textAlign:'center',marginTop:50}}>
            <thead> 
              <tr>
                <th>student Id</th>
                <th>full Name</th>
                <th>father Name</th>
                <th>class</th>
                <th>department</th>
                <th>Admission Date</th>
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
export default RegDetail