import React, {Component} from 'react';
import {addGuide} from '../actions/index';
import './Components.css';


class NewGuide extends Component {
  constructor(props){
    super(props);
    this.state = {
      guidename: '',
      owner: this.props.owner,
      guidecontent: '',
      category: '',
      dateposted: '' 
    }
  }

  date = new Date();
  today = `${this.date.getFullYear()}-${this.date.getMonth()+1}-${this.date.getDate()}`

  componentDidMount(){
    this.setState({
      ...this.state,
      dateposted: this.today
    })
  }

  input = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  submitGuide = () => {
    addGuide(this.props.userID, this.state, this.props.token)
  }

  render(){
    return(
      <>
        <form onSubmit={this.submitGuide}>
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
          <button type='submit'>Post it!</button>
        </form>
      </>
    )
  }
}

export default NewGuide;