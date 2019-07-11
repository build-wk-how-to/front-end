import React, {Component} from 'react';
import '../App.css';
import { connect } from 'react-redux';

class MainView extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div>
        <h1>Welcome to your How To guides, {this.props.username}!</h1>
      </div>
  )}
}

const mapStateToProps = state => {
  return {
      isLoading: state.login.isLoading,
      username: state.login.username,
      error: state.login.error
  }
}

export default connect(mapStateToProps, {})(MainView);