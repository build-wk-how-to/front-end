import React, { Component } from 'react';
//import { NavLink, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {login} from '../actions';
import './Components.css';



class Login extends Component {
  constructor(props){
      super(props);
      this.state={
        username:'',
        password:'',
      }
  }

  login = e => {
    e.preventDefault();
    this.props.login(this.state);
    this.props.history.push('/');
  }

  input = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value 
    });
  };
  
  render() {
      return (
        
        <div className="login-page">
          
            <div title="Login" className="login-form">
              <form onSubmit={this.login}>
                <h4>Username:</h4>
                <input
                placeholder="Enter your username"
                //value={this.state.username}
                name='username'
                value={this.state.username}
                type='text'
                onChange = {this.input}
                />
              <br/>
                <h4>Password:</h4>
                  <input
                  placeholder='Enter your password'
                // value={this.state.password}
                  name='password'
                  value={this.state.password}
                  type='password'
                  onChange = {this.input}
                  />
                <br/>
                <button className='login-button' type='submit'>Log In</button>
                </form>
            </div>
            
        </div>
      );
    }
  }



const mapStateToProps = state => {
  return {
      isLoading: state.login.isLoading,
      error: state.login.error
  }
}

export default connect(mapStateToProps, {login})(Login);