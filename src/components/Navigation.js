import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import './Components.css';


export const Navigation = props => {

  const navSwap = props.loggedIn === false 
      ? <Link to='/'>Log In</Link>
      : <><Link to='/'>Home</Link> <h2 onClick={props.logout}>Log Out</h2></>

  const signSwap = props.loggedIn === false
      && <NavLink to='/signup' activeClassName='inUse'>Sign Up</NavLink>
  
  return(
      <div>
          <h1>How-To</h1>
          <div>
              {navSwap}              
              {signSwap}
          </div>
      </div>
  )
}
