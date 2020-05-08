import React, {createContext, Component} from 'react';

export const AuthContext = createContext();

export default class ThemeContextProvider extends Component {

  state = {
    isAuthenticated: false
  };

  toggleAuth = () => {
    this.setState({isAuthenticated: !this.state.isAuthenticated});
  };

  render() {
    return (
      <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}
