import React from 'react'
import axios from 'axios'

class exercises extends React.Component{
    constructor(props) {
      super(props);
  
      this.onChangeUsername= this.onChangeUsername.bind(this);
      this.onChangeDescription= this.onChangeDescription.bind(this);
      this.onChangeEmail= this.onChangeEmail.bind(this);
      this.onSubmit = this.onSubmit.bind(this)
      this.state ={
        username: '',
        description: '',
        email: ''
        // users: []
      }
      
    // }
    // componentDidMount() {
    //   axios.get('http://localhost:5000/users/')
    //     .then(response => {
    //       if (response.data.length > 0) {
    //         this.setState({
    //           users: response.data.map(user => user.username),
    //           username: response.data[0].username
    //         })
    // //       }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     })
  
    }
  
    onChangeUsername(e){
      this.setState({
        username: e.target.value
      });
    }
    onChangeDescription(e){
      this.setState({
        description: e.target.value
      });
    }
    
    onChangeEmail(e){
      this.setState({
        email: e.target.value
      });
    }
    
  onSubmit(e) {
    e.preventDefault();
    const exercises = {
      username: this.state.username,
      description: this.state.description,
      email: this.state.email,
      // date: this.state.date
    }
    console.log(exercises);
    axios.post('http://localhost:5000/exercises/add', exercises)
    .then(res => console.log(res.data));
  
    // this.setState({
    //   username: '',
    //   description: ''
    // })
    window.location = '/';
  }
  
    render(){
          return(
              <div>
    
    <div onSubmit={this.onSubmit}>
  <p>you are on the create exercises</p>
    <form>
      <p>username</p>
    <input type="text"
       required 
         
              value={this.state.username}
               onChange={this.onChangeUsername}   />
         <br />
         <br />
         <p>description</p>
          <input type="text"
       required 
         
              value={this.state.description}
               onChange={this.onChangeDescription}   />
               <br />
               <br />
               <p>email</p>
             <input type="text"
       required 
         
              value={this.state.email}
               onChange={this.onChangeEmail}   />
         
         
      
            <br />
         <br />
         
         <button >Continue to check</button>
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
  export default exercises