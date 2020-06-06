import React, {Component} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {AuthContext} from '../contexts/AuthContext';

class ThemeToggler extends Component {
    render() {
        return(
        <AuthContext.Consumer>{(authContext) => (
            <ThemeContext.Consumer>{(themeContext) => {
                const { toggleTheme } = themeContext;
                const {user} = authContext;
                console.log(user);
                return(
                    <button onClick={() => toggleTheme()}>Switch</button>
                )
            }}</ThemeContext.Consumer>
        )}</AuthContext.Consumer>
        )
    }
}

export default ThemeToggler;