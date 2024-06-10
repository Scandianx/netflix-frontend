// src/components/MovieSearch.jsx
import React, { useState } from 'react';
import '../styles/MovieSearch.css';

function MovieSearch({ setMovies, setSearchActive }) {
  const [query, setQuery] = useState('');

  const searchMovies = async (e) => {
    e.preventDefault();
    setSearchActive(true);

    try {
      const response = await fetch(`http://localhost:8080/movies/search/${query}`, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnZXN0w6NvZGVwcm9qZXRvcyIsInN1YiI6ImVlZUBlIiwiZXhwIjoxNzE4MDQzMzM2fQ.5m9UQXVR293QTIdZyJg4zpbqEWeNyUme9CwiceuY6u8',
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data)
      setMovies(data);
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
      setSearchActive(false);
    }
  };

  return (
    <div className="movie-search-container">
      <form className="movie-search-form" onSubmit={searchMovies}>
        <input
          type="text"
          className="movie-search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie"
        />
        <button type="submit" className="movie-search-button">Search</button>
      </form>
    </div>
  );
}

export default MovieSearch;
