import React, {createContext, Component} from 'react';

//creating context
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    
    state = {
        isLightTheme: true,
        light: { text: '#555', ui: '#ddd', bg: '#eee'},
        dark: { text: '#ddd', ui: '#333', bg: '#555'}
    }

    render(){
        return(
        // Provider method will provide the state to all the children wrapped
        <ThemeContext.Provider value={{...this.state}}>
            {this.props.children}
        </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider;