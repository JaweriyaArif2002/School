import React, { Component } from 'react'
import Name from '../../src/AllForms/Name'

class NamesContainer extends Component {
    constructor(props) {


        super(props);
       

      }
    render() {
        return (
            
            // <div>
            //     {this.props.names.map(fullName => <Name fullName = {fullName}/>)}
              
            // </div>
            <tr>
    
            <td>
            {this.props.names.map(fullName => <Name fullName = {fullName}/>)}

            </td>
            <td>
            {this.props.names.map(studentId => <Name studentId = {studentId}/>)}

            </td>
            
            
          </tr>
  
            
        )
    }
}

export default NamesContainer