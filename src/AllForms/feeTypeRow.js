import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import history from '../../src/history'
class feeTypeRow extends Component {
  constructor(props) {


        super(props);
        this.delete = this.delete.bind(this);
        //this.fillOption=this.fillOption.bind(this);

      }
    delete() {
        
        axios.get('http://localhost:4002/feetype/delete/'+this.props.obj._id)
            .then(res=>{
                console.log('Deleted')
                //res=>{res.data}
               /// history.push("/Index")   
     window.location.reload();
            })
            .catch(err => console.log(err))    
            
        
    }

    
  render() {
    //console.log('props=>',this.props.obj.departmentName)
    
    //console.log('propsoption',<option value="volvo">{this.props.obj.departmentName}</option> )
    return (

       
    
     
        <tr>
    
          <td>
          {this.props.obj.feesType}
          
          </td>
          <td>
          {this.props.obj.code}  
          </td>
          {/* <td>
          {this.props.obj.amount}  
          </td> */}
          <td>
          {/* <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link> */}
            <button> <Link to="/Department" >edit</Link></button>  
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
     
        
        </tr>

    );
  }
}

export default feeTypeRow;