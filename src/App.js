import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {SignupView} from './views/SignupView';
import {Login} from './components/index';
import MainView from './views/MainView';
import {Navigation} from './components/Navigation';
// import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
    
  // componentDidMount(){
  //   this.setState({
  //     ...this.state,

  //   })
  // }
  

  logout = () => {
    this.setState({
      ...this.state,
      token: null,
    });
    localStorage.clear();
    window.location.reload();
  }


  render() {
    return (
      <>
        <Navigation logout={this.logout} loggedIn={this.props.loggedIn}/>
        <Route path='/signup/' component={SignupView} />
        <Route exact path='/' render={props =>(
          this.props.loggedIn === true 
          ? <MainView {...props}/>
          : <Login {...props}/>
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
