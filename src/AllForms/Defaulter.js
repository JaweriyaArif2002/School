import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
class Defaulter extends React.Component{
  constructor(props) {
    super(props);

    this.onChangeDefaulter= this.onChangeDefaulter.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
    this.state ={
      unpaidStudent: '',

    }
    

  }

  onChangeDefaulter(e){
    this.setState({
      unpaidStudent: e.target.value
    });
  }
  
  
  
  
onSubmit(e) {
  e.preventDefault();
  const defaulter = {
    unpaidStudent: this.state.unpaidStudent,

  }
  console.log(defaulter);
  axios.post('http://localhost:5000/defaulter/add', defaulter)
  .then(res => console.log(res.data));

  
}

    render(){
        return(
            <div>
                <div className="sidebar">
        <Link to="/Fee">FEE PACKAGE</Link> 
          <Link to="/">DEPARTMENT</Link>
          <Link to="/class">CLASS</Link>
          <Link to="/FeeCreation">FEE CREATION</Link>
          <Link to="/Defaulter">DEFAULTER FORM</Link>
          <Link to="/Admission">ADMISSION FORM</Link>
        </div>
        <div onSubmit={this.onSubmit} className="content">
        <form className="needs-validation" noValidate>
       
        
          
       <h2>DEFAULTER FORM</h2>
       <div className="mb-3">
         <label htmlFor="username">UNPAID STUDENT</label>
         <div className="input-group">
          <input value={this.state.unpaidStudent}
          onChange={this.onChangeDefaulter}
          type="text" className="form-control" id="username" placeholder="ENTER unpaid student..." required />
           <div className="invalid-feedback" style={{width: '100%'}}>
             Your username is required.
           </div>
         </div>
       </div>
       
       <div className="mb-3">
           <label htmlFor="country">SELECT YEAR</label>
           <select className="custom-select d-block w-100" id="country" required>
             <option value>Choose...YEAR</option>
            
           </select>
           <div className="invalid-feedback">
             Please select a valid DEPARTMENT.
           </div>
         </div>
         <div className="mb-3">
           <label htmlFor="country">SELECT MONTH</label>
           <select className="custom-select d-block w-100" id="country" required>
             <option value>Choose...MONTH</option>
            
           </select>
           <div className="invalid-feedback">
             Please select a valid DEPARTMENT.
           </div>
         </div>
       
       
       
    <div className="mb-4" />
       <button className="btn btn-success" type="submit">Continue to check</button>
       <br />
       <br />
       <br />
       <br />
     </form>
  
</div>  
            </div>
        )
    }
}
export default Defaulter