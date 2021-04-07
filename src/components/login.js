
import React, { Component } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
//import { Redirect, Route } from "react-router";
//import { useHistory} from 'react-router-dom'
//import { Router, Route, Link } from 'react-router-dom';
import history from '../../src/history';
import school from '../../src/img/school.jpg'
import school2 from '../../src/img/school2.jpg'
import school3 from '../../src/img/school3.jpg'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.UserId = this.UserId.bind(this);
        this.Password = this.Password.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            userId: '',
            password: '',
            
        }
    }
    UserId(e) {
      this.setState({
        userId: e.target.value
      });
    }
    Password(e) {
      this.setState({
        password: e.target.value
      })  
    }
    
  
    onSubmit(e) {
        e.preventDefault();
        var n = this.state.userId.search("-")
        var schoolname= this.state.userId.slice(0,n)    
        const obj = {
          schoolName: schoolname,
          users:[{
          userId: this.state.userId,
          password: this.state.password,
          }
        ],
      
        };
        console.log(obj)
        axios.post('http://localhost:4002/login/addschool', obj)
            .then(res =>{
              console.log(res.data)
              if(res.data){
                console.log('sucess')
                alert('login succes')
                // return <Redirect to="/" />;
    //<Link to={'/index.component'} />
           //this.histroy.push('/index.component')
          // let history = useHistory();
        
history.push("/Home")   
          }
              else{
                console.log('Error')
                alert('incorrect password')
              }
            } //console.log(res.data)
            );
        
        this.setState({
        
          userId: '',
          password: '',
          //business_gst_number: ''
        })
      }
  render() {
      return (
//         <div>
//     <div className="sticky-top" style={{width:'auto',backgroundColor:'#82b2c4', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',height:20}}> <div className="spinner-grow text-light" role="status">
//         <span className="visually-hidden">Loading...</span>
//       </div></div>
        
//         <div style={{paddingLeft:50,paddingRight:50,paddingTop:50,paddingBottom:100,border:'10'}}>
// {/*           
    //     <h3>LOGIN FORM</h3>
    //     <form onSubmit={this.onSubmit}>
    //         <div className="form-group">
    //             <label>USER ID  </label>
    //             <input 
    //               type="text" 
    //               className="form-control" 
    //               value={this.state.userId}
    //               onChange={this.UserId}
    //               />
    //         </div>
    //         <div className="form-group">
    //             <label>PASSWORD </label>
    //             <input type="password" 
    //               className="form-control"
    //               value={this.state.password}
    //               onChange={this.Password}
    //               />
    //         </div>
           
    //         <div className="form-group">
    //             <input type="submit" value="LOGIN" className="btn btn-primary"/>
    //         </div>
    //     </form>
    //  */}
    //    <div className="container-fluid"  style={{width:500,backgroundColor:'white',border:'3px solid #f1f1f1'}} >
    //     <h3 className="card-header" style={{textAlign:'center',fontWeight:'bold',color:'#1985b0'}}>LOGIN</h3>
    //     <form onSubmit={this.onSubmit}>
    //     <div className="card-body">
    //       <label style={{color:'black',fontSize:12,paddingLeft:70,fontFamily:'monospace',fontWeight:'bold'}}>ENTER YOUR USER ID AND PASSWORD TO LOGIN </label>
    //       <br />
    //     <label style={{fontWeight:'bold'}} htmlFor="floatingInput">USER ID*</label>
    //     <input type="text" style={{backgroundColor:'whitesmoke',fontSize:12}}  value={this.state.userId}
    //               onChange={this.UserId}  className="form-control" id="floatingInput"  />
    //     <br />
    //     <label  style={{fontWeight:'bold'}} htmlFor="floatingInput">PASSWORD*</label>
    //     <input type="password" style={{backgroundColor:'whitesmoke',fontSize:12}} value={this.state.password}
    //               onChange={this.Password} className="form-control" id="floatingInput"  />
       
    //     <br />

    //     <button style={{width:'100%',backgroundColor:'#5eabcc', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}  type="submit"  className="btn btn-primary">LOGIN</button>
    //     </div>
    //     </form>
    //     </div>
     
    //   </div>
    // </div>
    <div>
    <div className="container-fluid">
        <div className="row">
          {/* left column */}
          <div style={{marginTop:50,marginLeft:20,width:100,}} className="col-md-6">
            {/* jquery validation */}
            <div className="card card-primary">
              <div className="card-header">
                <h1 style={{textAlign:'center'}}>LOGIN</h1>
              </div>
              {/* /.card-header */}
              {/* form start */}
              <form noValidate="novalidate"  onSubmit={this.onSubmit} role="form" id="quickForm">
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">User Id</label>
                    <input name="text"   value={this.state.userId}
           onChange={this.UserId} className="form-control" id="exampleInputEmail1" placeholder="User Id" type="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input name="password" value={this.state.password}
       onChange={this.Password} className="form-control" id="exampleInputPassword1" placeholder="Password" type="password" />
                  </div>
                  <div className="form-group mb-0">
                    <div className="custom-control custom-checkbox">
                      <input name="terms" className="custom-control-input" id="exampleCheck1" type="checkbox" />
                      <label className="custom-control-label" htmlFor="exampleCheck1">I agree to the <a href="#">terms of service</a>.</label>
                    </div>
                  </div>
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">Submit</button>
              
                </div>
              
              </form>
              
            </div>
 
            {/* /.card */}
          </div>
          {/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
 <div className="carousel-indicators">
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
 </div>
 <div className="carousel-inner">
   <div className="carousel-item active">
     <img src={school} className="d-block w-100" alt="..." />
     <div className="carousel-caption d-none d-md-block">
       <h5>First slide label</h5>
       <p>Some representative placeholder content for the first slide.</p>
     </div>
   </div>
   <div className="carousel-item">
     <img src={school} className="d-block w-100" alt="..." />
     <div className="carousel-caption d-none d-md-block">
       <h5>Second slide label</h5>
       <p>Some representative placeholder content for the second slide.</p>
     </div>
   </div>
   <div className="carousel-item">
     <img src={school} className="d-block w-100" alt="..." />
     <div className="carousel-caption d-none d-md-block">
       <h5>Third slide label</h5>
       <p>Some representative placeholder content for the third slide.</p>
     </div>
   </div>
 </div>
 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
   <span className="carousel-control-prev-icon" aria-hidden="true" />
   <span className="visually-hidden">Previous</span>
 </button>
 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
   <span className="carousel-control-next-icon" aria-hidden="true" />
   <span className="visually-hidden">Next</span>
 </button>
</div> */}
 
          {/*/.col (left) */}
          {/* right column */}
          <div className="col-md-6">
 
          </div>
          
          {/*/.col (right) */}
        </div>
 
        {/* /.row */}
      </div>
 
</div>
)
  }
}
