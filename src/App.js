import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ToggleTheme from './components/ToggleTheme';
import ThemeContextProvider from './context/ThemeContext.js';
import AuthContextProvider from './context/AuthContext.js';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar/>
          <BookList/>
          <ToggleTheme/>
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
