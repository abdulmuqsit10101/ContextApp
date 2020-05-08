import React, {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext.js';
import {ThemeContext} from '../../context/ThemeContext.js';

function ToggleTheme() {
  const {isAuthenticated} = useContext(AuthContext);
  const {toggleTheme, isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <button className='toggle-btn' style={{backgroundColor: theme.ui, color: theme.syntax}}
            onClick={isAuthenticated ? toggleTheme : null}>Toggle Theme</button>
  )
}

export default ToggleTheme;

