import React, {Component} from 'react';
import {AuthContext} from '../../context/AuthContext.js';
import {ThemeContext} from '../../context/ThemeContext.js';

class ToggleTheme extends Component {
  // static contextType = ThemeContext;

  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => {
          return (
            <ThemeContext.Consumer>
              {(context) => {
                const { isAuthenticated } = authContext;
                const {toggleTheme, isLightTheme, light, dark} = context;
                const theme = isLightTheme ? light : dark;
                return (
                  <button className='toggle-btn' style={{backgroundColor: theme.ui, color: theme.syntax}}
                          onClick={isAuthenticated ? toggleTheme : null}>Toggle Theme</button>
                )
              }}
            </ThemeContext.Consumer>
          )
        }}
      </AuthContext.Consumer>
    )
  }
}

export default ToggleTheme;

