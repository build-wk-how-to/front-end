import React, { Component } from 'react';
import axios from 'axios';
//import DashBoard from './dashboard';
import './App.css';


const apiBaseUrl = "";

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
        username:'',
        password:'',
        usertype: 0
        }
       }
      render() {
          return (
            <div>
              
                <div title="Login">
                 <form>
                   <input
                   placeholder="Enter your username"
                   //value={this.state.username}
                   name='username'
                   type='text'
                   onChange = {(e,newValue) => this.setState({username:newValue})}
                   />
                 <br/>
                     <input
                     placeholder='Enter your password'
                    // value={this.state.password}
                     name='password'
                     type='password'
                     onChange = {(e,newValue) => this.setState({password:newValue})}
                     />
                   <br/>
                   <button className='login-button' onClick={(e) => this.handleClick(e)}>Log In</button>
                   </form>
               </div>
               
            </div>
          );
        }
      }
    // this.state={
    //   email:'',
    //   password:'',
    //   menuValue:1,
    //   //loginComponent:localloginComponent,
    //   loginRole:'name'
    // }
  
  function handleClick(e){
    const apiBaseUrl = "";
    const self = this;
    const payload={
    "username":this.state.username,
    "password":this.state.password
    }
    axios.post(apiBaseUrl+'login', payload)
    .then(function (response) {
    console.log(response);
      if(response.data.code === 200){
      console.log("Login successful");
      this.props.history.push('/dashboard')
       const dashboard=[];
       dashboard.push(<DashBoard appContext={self.props.appContext}/>)
       self.props.appContext.setState({loginPage:[],dashboard:dashboard})
      }
      else if(response.data.code === 204){
      console.log("username and password do not match");
      alert("username and password do not match")
      }
      else{
      console.log("username does not exists");
      alert("username does not exist");
      }
    })
    .catch(function (error) {
    console.log(error);
    });
    }
  



export default Login;
