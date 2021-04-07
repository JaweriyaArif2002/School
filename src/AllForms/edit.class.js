import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import TableRow from './tableRow';
import history from '../../src/history'
//import TableRow from './tableRow';
export default class EditClass extends Component {
    constructor(props) {
        super(props);
        //const history = useHistory();
      //  this.onDepartmentId = this.onDepartmentId.bind(this);
      this.onClass = this.onClass.bind(this);
      this.onshortName = this.onshortName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          class: '',
          shortName:'',
        }
  }
  componentDidMount() {
       console.log('On edit click',this.props.match.params.id)
      axios.get('http://localhost:4002/class/edit/'+this.props.match.params.id)
          .then(response => {
            console.log(response.data)
              this.setState({ 
                //departmentId: response.data.departmentId, 
                class: response.data.class,
                shortName: response.data.shortName,
                // business_gst_number: response.data.business_gst_number
             });
  //            axios.get('http://localhost:4002/business')
  // .then(response => {
  //   this.setState({ business: response.data });
  // })
  // .catch(function (error) {
  //   console.log(error);
  // })
             
          })
          .catch(function (error) {
              console.log(error);
          })
    }

    onClass(e){
      this.setState({
        class: e.target.value
      })
    }
    onshortName(e){
      this.setState({
        shortName: e.target.value
      })
    }
      // tabRow(){
      //   return this.state.business.map(function(object, i){
      //       return <TableRow obj={object} key={i} />;
      //   });
       
      // }
      
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      //departmentId: this.state.departmentId,
      class: this.state.class,
      shortName: this.state.shortName
    };
    console.log(obj)
    // axios.post('http://localhost:4002/class/update/'+this.props.match.params.id, obj)
    //     .then(res => console.log(res.data));
    // // <Link to={/Department} />
    // //const history = useHistory();
    // alert('UPDATE')
    // history.push('/Department')
    //<Link to="/Department"/>
 //this.history.push('/Department');
//  window.location.reload();
  }
 
  render() {
    return (
        <div style={{marginLeft:100,marginRight:100,marginTop:20}}>
        <h3 style={{textAlign:'center',fontWeight:'bold',padding:20 ,backgroundColor:'whitesmoke', border:'2px solid lightgray'}}>DEPARTMENT FORM</h3>
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label style={{fontWeight:'bold'}}>CLASS  </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.class}
                  onChange={this.onClass}
                  style={{backgroundColor:'whitesmoke'}}
                  />
            </div>
            <div className="form-group">
                <label style={{fontWeight:'bold'}}>SHORT NAME</label>
                <input type="text" 
                  className="form-control"
                  value={this.state.shortName}
                  onChange={this.onshortName}
                  style={{backgroundColor:'whitesmoke'}}
                  />
            </div>
           
            <div className="form-group">
                <input type="submit" value="Submit" className="btn btn-primary"style={{backgroundColor:'#13b0a6'}} />
            </div>
            {/* <table className="table table-bordered border-primary" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>DE</th>
                <th>PREFIX</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
         */}
        </form>
 
    </div>
    )
  }
}