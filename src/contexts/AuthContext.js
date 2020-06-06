import React, {Component, createContext} from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        user: "Karan Kumar"
    }
    render() {
        return (
            <AuthContext.Provider value={{...this.state}}>
            {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider;