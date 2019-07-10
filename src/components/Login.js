import React, { Component } from 'react';
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
    
    render() {
        return (
          <div className="login-page">
            
              <div title="Login" className="login-form">
                <form onSubmit={this.login}>
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
