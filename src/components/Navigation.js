import React from 'react';
import { NavLink, Link} from 'react-router-dom';

export const Navigation = props => {

  const navSwap = props.loggedIn === false 
      ? <Link to='/'>Log in</Link>
      : <><Link to='/'>Home</Link> <h2 onClick={props.logout}>log out</h2></>

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
