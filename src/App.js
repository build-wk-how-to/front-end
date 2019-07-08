import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {SignupView} from './views/SignupView';
import {LoginView} from './views/LoginView';
import {MainView} from './views/MainView';
// import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
    
  // componentDidMount(){
  //   this.setState({
  //     ...this.state,

  //   })
  // }

  // logout = () => {
  //   console.log('pow');
  //   this.setState({
  //     ...this.state,
  //     token: null,
  //     displayName: ''
  //   });
  //   localStorage.clear();
  //   window.location.reload();
  // }


  render() {
    return (
      <>
        <Route path='/signup/' component={SignupView} />
        <Route exact path='/' render={props =>(
          this.props.loggedIn === true 
          ? <MainView {...props}/>
          : <LoginView {...props}/>
        )} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.login.loggedIn
  }
}

export default connect(mapStateToProps, {})(App);
