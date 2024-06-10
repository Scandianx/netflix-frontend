// src/components/MoviesList.jsx
import React from 'react';
import '../styles/MovieList.css';

const MoviesList = ({ movies, onPosterClick }) => {
  return (
    <div className="movies-list2">
    <div className="movies-container2">
      <div className="movies-row2">
        {movies.map((movie) => (
          <div key={movie.id} className="movie2" onClick={() => onPosterClick(movie.id)}>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster}`} alt={`Movie ${movie.id}`} className="poster2" />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default MoviesList;
