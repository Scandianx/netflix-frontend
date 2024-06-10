// src/App.jsx
import React, { useState } from 'react';
import './App.css';

import Login from './components/Login';
import Register from './components/Register';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Movies from './components/Movies';
import MoviesList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import MovieDetails from './components/MovieDetails';

function App() {
  const [searchActive, setSearchActive] = useState(false);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showLogin, setShowLogin] = useState(true); // Controla qual componente de autenticação está sendo exibido
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Verifica se o usuário está autenticado

  const handlePosterClick = async (id) => {
    const response = await fetch(`http://localhost:8080/movies/${id}`, {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnZXN0w6NvZGVwcm9qZXRvcyIsInN1YiI6ImVlZUBlIiwiZXhwIjoxNzE4MDQzMzM2fQ.5m9UQXVR293QTIdZyJg4zpbqEWeNyUme9CwiceuY6u8',
        'Content-Type': 'application/json'
      }
    });
    const movie = await response.json();
    setSelectedMovie(movie);
  };

  const handleCloseDetails = () => {
    setSelectedMovie(null);
  };

  const handleToggleAuth = () => {
    setShowLogin(!showLogin); // Troca entre a exibição do componente de login e registro
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Define o estado de autenticação como true quando o usuário faz login
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Define o estado de autenticação como false quando o usuário faz logout
  };

  return (
    <div className="app">
      {isLoggedIn ? ( // Verifica se o usuário está autenticado
        <>
          <Nav setSearchActive={setSearchActive} setMovies={setMovies} />
          {!searchActive && <Banner />}
          {!searchActive && <Movies />}
          {searchActive && <MoviesList movies={movies} onPosterClick={handlePosterClick} />}
          {selectedMovie && <MovieDetails movie={selectedMovie} onClose={handleCloseDetails} />}
          <button onClick={handleLogout}>Logout</button> // Botão de logout
        </>
      ) : (
        <div>
          {showLogin ? (
            <Login toggleAuth={handleToggleAuth} onLogin={handleLogin} /> // Passa a função de toggleAuth para permitir a alternância entre login e registro
          ) : (
            <Register toggleAuth={handleToggleAuth} onLogin={handleLogin} /> // Passa a função de toggleAuth para permitir a alternância entre login e registro
          )}
        </div>
      )}
    </div>
  );
}

export default App;
