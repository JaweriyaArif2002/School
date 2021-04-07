import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import TableRow from './tableRow';
import history from '../../src/history'
//import TableRow from './tableRow';
export default class Edit extends Component {
    constructor(props) {
        super(props);
        //const history = useHistory();
      //  this.onDepartmentId = this.onDepartmentId.bind(this);
        this.onDepartmentName = this.onDepartmentName.bind(this);
        this.onPrefix = this.onPrefix.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            // departmentId: '',
            business:[],
            departmentName: '',
            prefix:'',
        }
  }
  componentDidMount() {
       console.log('On edit click',this.props.match.params.id)
      axios.get('http://localhost:4002/business/edit/'+this.props.match.params.id)
          .then(response => {
            console.log(response.data)
              this.setState({ 
                //departmentId: response.data.departmentId, 
                departmentName: response.data.departmentName,
                prefix: response.data.prefix,
                // business_gst_number: response.data.business_gst_number
             });
             axios.get('http://localhost:4002/business')
  .then(response => {
    this.setState({ business: response.data });
  })
  .catch(function (error) {
    console.log(error);
  })
             
          })
          .catch(function (error) {
              console.log(error);
          })
    }

    onPrefix(e) {
        this.setState({
          prefix: e.target.value
        });
      }
      onDepartmentName(e) {
        this.setState({
          departmentName: e.target.value
        })  
      }
      tabRow(){
        return this.state.business.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
       
      }
      
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      //departmentId: this.state.departmentId,
      departmentName: this.state.departmentName,
      prefix: this.state.prefix
    };
    axios.post('http://localhost:4002/business/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    // <Link to={/Department} />
    //const history = useHistory();
    alert('UPDATE')
    history.push('/Department')
    //<Link to="/Department"/>
 //this.history.push('/Department');
 window.location.reload();
  }
 
  render() {
    return (
        <div style={{marginLeft:100,marginRight:100,marginTop:20}}>
        <h3 style={{textAlign:'center',fontWeight:'bold',padding:20 ,backgroundColor:'whitesmoke', border:'2px solid lightgray'}}>DEPARTMENT FORM</h3>
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label style={{fontWeight:'bold'}}>DEPARTMENT NAME  </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.departmentName}
                  onChange={this.onDepartmentName}
                  style={{backgroundColor:'whitesmoke'}}
                  />
            </div>
            <div className="form-group">
                <label style={{fontWeight:'bold'}}>PREFIX </label>
                <input type="text" 
                  className="form-control"
                  value={this.state.prefix}
                  onChange={this.onPrefix}
                  style={{backgroundColor:'whitesmoke'}}
                  />
            </div>
           
            <div className="form-group">
                <input type="submit" value="Submit" className="btn btn-primary"style={{backgroundColor:'#13b0a6'}} />
            </div>
            <table className="table table-bordered border-primary" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>DEPARTMENT NAME</th>
                <th>PREFIX</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        
        </form>
 
    </div>
    )
  }
}