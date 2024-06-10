import React, { useState } from 'react';
import '../styles/MovieSearch.css';

function MovieSearch({ setSearchActive }) {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    setSearchActive(true);
    const response = await fetch(`/api/movies/search?title=${query}`);
    const data = await response.json();
    setMovies(data);
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
      <div className="movie-results">
        {movies.map(movie => (
          <div key={movie.id} className="movie-item">
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <img src={movie.posterUrl} alt={movie.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;
