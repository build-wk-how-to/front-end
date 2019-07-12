import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Components.css';
import { Link } from 'react-router-dom';


class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
        };
        
    }
    

render() {
    return (
        
                    <div className="dashboard-boxes">
                        <Link
                            to="/NewGuide"
                            style={{ textDecoration: 'none' }}
                        >
                            <div className="new-guide-box">
                                New Guide
                            </div>
                        </Link>
                        <Link
                            to="/CruddableGuide"
                            style={{ textDecoration: 'none' }}
                        >
                            <div className="my-guides-box">
                                My Guides
                            </div>
                        </Link>
                        
                            
                    </div>
    );
}
}

export default Dashboard