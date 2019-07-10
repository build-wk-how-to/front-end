import React, {Component} from 'react';
import './Components.css';

class ReadOnlyGuide extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.guidename,
      owner: this.props.owner,
      content: this.props.guidecontent,
      date: this.props.dateposted,
      category: this.props.category,

    }
  }

  render(){
    return(
      <>
        <h2>{this.state.title}</h2>
        <h3>by {this.state.owner}</h3>
        <div>
          {this.state.content}
        </div>
        <h4>Posted {this.state.date}</h4>
        <h2>Filed Under: {this.state.category}</h2>
      </>
    )
  }
}

export default ReadOnlyGuide;