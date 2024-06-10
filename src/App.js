import React from 'react';
import './App.css';

import Nav from './components/Nav';
import Banner from './components/Banner';
import Movies from './components/Movies';


function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Movies/>
    </div>
  );
}

export default App;
