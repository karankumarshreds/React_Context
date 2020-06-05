import React, {Component} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

/*********************************
 * using ThemeContext.Consumer
 * can also be used in functional 
 * components. Also we can consume
 * multiple contexts using this 
 */
class BookList extends Component {
    render() {
        return(
        <ThemeContext.Consumer>{(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return(
            <div className="book-list" style={{background: theme.bg, color: theme.text}}>
            <ul>
                <li style={{background: theme.ui}}>Book1</li>
                <li style={{background: theme.ui}}>Book2</li>
                <li style={{background: theme.ui}}>Book3</li>
            </ul>
            </div>
          )
        }}</ThemeContext.Consumer>
            
        )
    }
}

export default BookList;