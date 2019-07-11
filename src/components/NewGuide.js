import React, {Component} from 'react';
import {addGuide, getCategories} from '../actions/index';
import './Components.css';


class NewGuide extends Component {
  constructor(props){
    super(props);
    this.state = {
      guidename: '',
      owner: this.props.owner,
      guidecontent: '',
      category: 0,
      dateposted: '' 
    }
  }

  categories = [];
  options = [];
  date = new Date();
  today = `${this.date.getFullYear()}-${this.date.getMonth()+1}-${this.date.getDate()}`

  componentDidMount(){
    this.setState({
      ...this.state,
      dateposted: this.today
    });
    this.categories = getCategories().map(val => {
      return <option value={val.categoryID}>{val.categoryname}</option>
    });
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
          <h3>Tag:</h3>
          <select
            onChange={this.input}
            name='category'
          >
            {this.categories}
          </select>
          <button type='submit'>Post it!</button>
        </form>
      </>
    )
  }
}

export default NewGuide;