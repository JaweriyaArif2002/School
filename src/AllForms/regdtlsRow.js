import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import history from '../../src/history'
class regdtlsRow extends Component {
  constructor(props) {


        super(props);
    //    this.delete = this.delete.bind(this);
        //this.fillOption=this.fillOption.bind(this);

      }
    //   delete() {
        
    //     axios.get('http://localhost:4002/class/delete/'+this.props.obj._id)
    //         .then(res=>{
    //             console.log('Deleted')
    //             //res=>{res.data}
    //            /// history.push("/Index") 
    //            alert('Class Delete')  
    //  window.location.reload();
    //         })
    //         .catch(err => console.log(err))    
            
        
    // }

        
  render() {
   console.log('props=>',this.props.obj.class)
    
    //console.log('propsoption',<option value="volvo">{this.props.obj.departmentName}</option> )
    return (

  <tr>
    
          <td>
            {this.props.obj.studentId}
          </td>
          <td>
            {this.props.obj.fullName}
          </td>
          <td>
            {this.props.obj.fatherName}
          </td>
          <td>
            {this.props.obj.class}
          </td>
          <td>
            {this.props.obj.departmentName}
          </td>
          <td>
            {this.props.obj.AdmDate}
          </td>
          
          {/* <td>
            {this.props.obj.shortName}
          </td>
          
          <td>
          <Link to={"/EditClass/:id"}  className="btn btn-primary">Edit</Link>
          
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
         */}
        </tr>


    );
  }
}

export default regdtlsRow;