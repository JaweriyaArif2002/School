import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import history from '../../src/history'
class admissionRow extends Component {
  render() {
   console.log('props=>',this.props.obj.class)
    
    //console.log('propsoption',<option value="volvo">{this.props.obj.departmentName}</option> )
    return (

        <option  name={this.props.obj.class}  >
        {this.props.obj.class}</option>

    );
  }
}

export default admissionRow;