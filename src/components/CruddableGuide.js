import React, {Component} from 'react';
import {updateGuide, deleteGuide} from '../actions/index';
import './Components.css';


class CruddableGuide extends Component {
  constructor(props){
    super(props);
    this.state = {
      guideID: this.props.guideID,
      guidename: this.props.guidename,
      owner: this.props.owner,
      guidecontent: this.props.guidecontent,
      dateposted: this.props.dateposted,
      category: this.props.category,
      formState: 'hidden'
    }
  }

  submitUpdate = () =>{
    updateGuide(this.state.guideID, this.props.userID, this.state.guidecontent, this.props.token)
  }

  delete = () =>{
    deleteGuide(this.props.userID, this.state.guideID, this.props.token)
  }

  toggleForm = () =>{
    this.state.formState === 'hidden'
      ? this.setState({...this.state, formState: 'shown'})
      : this.setState({...this.state, formState: 'hidden'})
  }

  render(){
    return(
      <>
        <form onSubmit={this.submitUpdate} className={this.state.formState}>
          <h3>Title:</h3>
          <input 
            onChange={this.input}
            placeholder="What's it called?"
            value={this.state.guidename}
            name='guidename'
            type='text'
          />
          <h3>Explain your lifehack:</h3>
          <textarea
            onChange={this.input}
            placeholder='Fire away!'
            value={this.state.guidecontent}
            name='guidecontent'
            type='text'
            rows='10'
          ></textarea>
          <button type='submit'>Update</button>
        </form>
        <button onClick={this.delete}>Delete This Lifehack</button>
      </>
    )
  }
}

export default CruddableGuide;