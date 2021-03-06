import React from 'react';

import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggler from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggler/>
      </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
