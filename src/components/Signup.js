import React, {Component} from 'react';
import { connect } from 'react-redux';
import {signup} from '../actions';

class Signup extends Component {

  state = {
    username: '',
    password: '',
    usertype: 0
  }

  input = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

  signup = e => {
      e.preventDefault();
      console.log(this.state);
      this.props.signup(this.state);
  }

  render(){
    return(
      <div>
        <h3>{this.props.displayText}</h3>
        <form onSubmit={this.signup}>
            <p>your name</p>
            <p>username</p>
            <input
                onChange={this.input}
                placeholder='Username'
                value={this.state.username}
                name='username'
                type='text'
            />
            <p>password</p>
            <input
                onChange={this.input}
                placeholder='Password'
                value={this.state.password}
                name='password'
                type='password'
            />
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