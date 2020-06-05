import React from 'react';

import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggler from './components/ThemeToggle';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggler/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
