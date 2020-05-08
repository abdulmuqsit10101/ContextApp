import React, {Component} from 'react';
import {ThemeContext} from '../../context/ThemeContext.js';
import {AuthContext} from '../../context/AuthContext.js';

class Navbar extends Component {

  static contextType = AuthContext;

  render() {
    console.log('AuthContext : ', this.context);
    return (
      <AuthContext.Consumer>
        {(authContext) => {
          return (
            <ThemeContext.Consumer>{(context) => {
              const {isLightTheme, dark, light} = context;
              const {toggleAuth, isAuthenticated} = authContext;
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
            }}
            </ThemeContext.Consumer>
          )
        }}
      </AuthContext.Consumer>
    )
  }
}

export default Navbar;
