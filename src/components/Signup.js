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
      <div className="signup-form">
        {/* <h3>{this.props.displayText}</h3> */}
        <form onSubmit={this.signup}>
            <p>Username:</p>
            <input
                onChange={this.input}
                placeholder='Username'
                value={this.state.username}
                name='username'
                type='text'
            />
            <p>Password:</p>
            <input
                onChange={this.input}
                placeholder='Password'
                value={this.state.password}
                name='password'
                type='password'
            />
            <p>Select User Type:</p>
            <p>General User</p>
            <input
              onChange={this.input}
              value={1}
              name='usertype'
              type='radio'
            />
            <p>Content Creator</p>
            <input
              onChange={this.input}
              value={2}
              name='usertype'
              type='radio'
            />
            <br />
            <button className='signup-button' type='submit'>sign up</button>
        </form>
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