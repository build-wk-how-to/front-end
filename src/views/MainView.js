import React, {Component} from 'react';
import '../App.css';
import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard'
import {ReadOnlyGuide, CruddableGuide, NewGuide} from '../components/index';
import {fetchAll} from '../actions/index';


class MainView extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayedGuides: []
    }
  }

  contentSwitch = () => {
    if(this.props.usertype === 1){
      this.props.guides.map(guide =>
        <ReadOnlyGuide 
          title={guide.guidename}
          owner={guide.owner}
          content={guide.content}
          date={guide.date}
          category={guide.category}
        />
      )
    }
    else if(this.props.usertype === 2){
      this.props.guides.forEach(guide =>
            <CruddableGuide 
            guideID={guide.guideID}
            guidename={guide.guidename}
            owner={guide.owner}
            content={guide.content}
            date={guide.date}
            category={guide.category}
            userID={this.props.userID}
          />
      )
    }
  }

  test = () => {
    // const dumb = () =>{ if(this.props.usertype === 1){
    //   this.props.guides.map(guide =>
    //     <ReadOnlyGuide 
    //       title={guide.guidename}
    //       owner={guide.owner}
    //       content={guide.content}
    //       date={guide.date}
    //       category={guide.category}
    //     />
    //   );
      
    // }}
    // setTimeout(function(){dumb()}, 3000);
    if(this.props.usertype === 1){
      this.props.guides.map(guide =>
        <ReadOnlyGuide 
          title={guide.guidename}
          owner={guide.owner}
          content={guide.content}
          date={guide.date}
          category={guide.category}
        />
      );
      
    }
    
  }

  componentDidMount(){
    // const stupidHack = () => this.setState({...this.state, displayedGuides: this.contentSwitch});
    this.props.fetchAll(this.props.token);
    // setTimeout(function(){stupidHack()}, 3000);
  }



  render(){
    return(
      <div className='dashboard-header'>
        <h1>Welcome to your How To guides, {this.props.username}!</h1>

        <div className='dashboard-buttons'> 

        <div>
          {this.test()}

        </div>
      </div>
  )}
}

const mapStateToProps = state => {
  return {
      isLoading: state.login.isLoading,
      username: state.login.username,
      error: state.login.error,
      usertype: state.login.usertype,
      guides: state.guides.guides,
      fetched: state.guides.fetched,
      userID: state.login.userID,
      token: state.login.token
  }
}

export default connect(mapStateToProps, {fetchAll})(MainView);