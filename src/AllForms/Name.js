import React, { Component } from 'react'

class Name extends Component {
    constructor(props) {


        super(props);
       

      }
    render() {
        return (
            <tr>
    
            <td>
            {this.props.fullName}

            </td>
            {/* <td>
            {this.props.studentId}

            </td>
             */}
            
         </tr>
  
            // <div>
            //     {this.props.fullName}
            //     {this.props.studentId}
            // </div>
            
        )
    }
}

export default Name