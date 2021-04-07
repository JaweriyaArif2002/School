import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import axios from 'axios';
//import history from '../../src/history'
class OptionFees extends Component {
  // constructor(props) {
  //  super(props);
  //       //this.selectedtindex = this.selectedtindex.bind(this);

  //     }
      
    render() {
   // console.log('props=>',this.props.obj.feesType)
    return (
     
    
      <option value={this.props.obj._id} name={this.props.obj.feesType}  >
          {this.props.obj.feesType}</option>
      );
  }
}

export default OptionFees;