import React, {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext.js';
import {AuthContext} from '../../context/AuthContext.js';

function Navbar() {
  const {isLightTheme, dark, light} = useContext(ThemeContext);
  const {toggleAuth, isAuthenticated} = useContext(AuthContext);

  const theme = isLightTheme ? light : dark;
  return (
    <nav className="nav" style={{color: theme.syntax, backgroundColor: theme.ui}}>
      <h1>Context App</h1>
      <p style={{cursor: 'pointer'}} onClick={toggleAuth}>{isAuthenticated ? 'Log Out' : 'Log In'}</p>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar;
