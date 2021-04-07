import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './tableRow';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {business: []};
    }
    componentDidMount(){
        console.log('yes')
      axios.get('http://localhost:4002/business')
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

    render() {
      return (
        <div>
        
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>DEPARTMENT ID</th>
                <th>DEPARTMENT NAME</th>
              
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }