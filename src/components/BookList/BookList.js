import React, {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext.js';

function BookList() {
  const {isLightTheme, dark, light} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <>
      <div className="book-list" style={{backgroundColor: theme.bg, color: theme.syntax}}>
        <ul>
          <li style={{background: theme.ui}}>The way of the king</li>
          <li style={{background: theme.ui}}>The name of the winds</li>
          <li style={{background: theme.ui}}>The final Empire</li>
        </ul>
      </div>
    </>
  )
}

export default BookList;
