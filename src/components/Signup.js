import React, {Component} from 'react';
import { connect } from 'react-redux';
import {signup} from '../actions';
import './Components.css';


class Signup extends Component {

  state = {
    username: '',
    password: '',
    usertype: 0
  }

  input = e => {
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value 
      });
    };

  signup = e => {
      e.preventDefault();
      // console.log(this.state);
      this.props.signup(this.state);
  }

  render(){
    return(
      <div className="signup-page">
      <div className="signup-form">
        {/* <h3>{this.props.displayText}</h3> */}
        <form onSubmit={this.signup}>
            <h4>Username:</h4>
            <input
                onChange={this.input}
                placeholder='Username'
                value={this.state.username}
                name='username'
                type='text'
            />
            <h4>Password:</h4>
            <input
                onChange={this.input}
                placeholder='Password'
                value={this.state.password}
                name='password'
                type='password'
            />
           
            <h4>Select User Type:</h4>
            <h5>General User</h5>
            <input className='radio-button'
              onChange={this.input}
              value={1}
              name='usertype'
              type='radio'
            />
            <h5>Content Creator</h5>
            <input className='radio-button'
              onChange={this.input}
              value={2}
              name='usertype'
              type='radio'
            />
            
            <br/>

            <button className='signup-button' type='submit'>Sign Up</button>
        </form>
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      isLoading: state.signup.isLoading,
      error: state.signup.error
  }
}

export default connect(mapStateToProps, {signup})(Signup);