import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
class FeeCreation extends React.Component{constructor(props) {
  super(props);

  this.onDueDate= this.onDueDate.bind(this);
  this.onLateFee= this.onLateFee.bind(this);
  this.onValidity= this.onValidity.bind(this);
  this.onSubmit = this.onSubmit.bind(this)
  this.state ={
    dueDate: '',
    lateFee: '',
    validity:''
  
  }
}
onDueDate(e){
  this.setState({
    dueDate: e.target.value
  });
}

onLateFee(e){
  this.setState({
    lateFee: e.target.value
  });
}

onValidity(e){
  this.setState({
    validity: e.target.value
  });
}

onSubmit(e) {
e.preventDefault();
const Creation = {
  dueDate: this.state.dueDate,
  lateFee: this.state.lateFee,
  validity: this.state.validity
  
}
console.log(Creation);
axios.post('http://localhost:5000/Creation/add', Creation)
.then(res => console.log(res.data));


 
//window.location = '/';
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
           
            
              
           <h2>FEE CREATION FORM</h2>
           <div className="mb-3">
               <label htmlFor="country">SELECT YEAR</label>
               <select className="custom-select d-block w-100" id="country" required>
                 <option value>Choose...</option>
                
               </select>
               <div className="invalid-feedback">
                 Please select a valid DEPARTMENT.
               </div>
             </div>
             <div className="mb-3">
               <label htmlFor="country">SELECT MONTH</label>
               <select className="custom-select d-block w-100" id="country" required>
                 <option value>Choose...</option>
                
               </select>
               <div className="invalid-feedback">
                 Please select a valid DEPARTMENT.
               </div>
             </div>
           
           <div className="mb-3">
             <label htmlFor="username">DUE DATE</label>
             <div className="input-group">
              <input
              value={this.state.dueDate} 
              onChange={this.onDueDate}
              type="date" className="form-control" id="username" placeholder="ENTER due date..." required />
               <div className="invalid-feedback" style={{width: '100%'}}>
                 Your username is required.
               </div>
             </div>
           </div>
           <div className="mb-3">
             <label htmlFor="username">LATE FEE</label>
             <div className="input-group">
              <input
              value={this.state.lateFee}
              onChange={this.onLateFee}
               type="text" className="form-control" id="username" placeholder="ENTER late fee..." required />
               <div className="invalid-feedback" style={{width: '100%'}}>
                 Your username is required.
               </div>
             </div>
           </div>
           <div className="mb-3">
             <label htmlFor="username">VALIDITY</label>
             <div className="input-group">
              <input 
              value={this.state.validity}
              onChange={this.onValidity}
              type="date" className="form-control" id="username" placeholder="ENTER validity..." required />
               <div className="invalid-feedback" style={{width: '100%'}}>
                 Your username is required.
               </div>
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
export default FeeCreation