import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import BookContent from './components/BookContent/BookContent';
import NavigationButtons from './components/NavigationButtons/NavigationButtons';
import './styles/GlobalStyles.css';

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <BookContent />
      <NavigationButtons />
    </div>
  );
}

export default App;
