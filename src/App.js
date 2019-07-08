import React, { Component } from 'react';
import './App.css';
//import Loginscreen from './loginscreen';
//import DashBoard from './dashboard';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      //uploadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.dashboard}
      </div>
    );
  }
}
// if(response.data.code == 200){
//   console.log("Login successfull");
//   const dashboard=[];
//   dashboard.push(<DashBoard appContext={self.props.appContext}/>)
//   self.props.appContext.setState({loginPage:[],dashboard:dashboard})
//   }



export default App;