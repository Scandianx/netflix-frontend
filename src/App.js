import React, { useState } from 'react';
import './App.css';

import Nav from './components/Nav';
import Banner from './components/Banner';
import Movies from './components/Movies';
import MovieSearch from './components/MovieSearch';

function App() {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <div className="app">
      <Nav setSearchActive={setSearchActive} />
      {!searchActive && <Banner />}
      {!searchActive && <Movies />}
      
    </div>
  );
}

export default App;
