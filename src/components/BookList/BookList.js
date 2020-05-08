import React, {Component} from 'react';
import {ThemeContext} from '../../context/ThemeContext.js';

export default class BookList extends Component {
  static contextType = ThemeContext;

  render() {
    const {isLightTheme, dark, light} = this.context;
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
};
