// src/components/MovieDetails.jsx
import React from 'react';
import '../styles/MovieDetails.css';
import estrela from '../assets/estrela.png';

const MovieDetails = ({ movie, onClose }) => {
  return (
    <div className="movie-details-overlay" onClick={onClose}>
      <div className="movie-details-container" onClick={(e) => e.stopPropagation()}>
      <h2>{movie.title}</h2>
        <button className="close-button" onClick={onClose}>X</button>
        <div className="details-content">
        
          <div className="poster-section">
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/>
          </div>
          <div className="info-section">
          <p className="overview">{movie.overview}</p>
          
            <div className="rating">
              <img src={estrela} alt="star"/>
              <p>{movie.vote_average/2}</p>
            </div>
            <p>Data de lançamento: {movie.release_date}</p>
            <button className="fav-button">Favoritos</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default MovieDetails;
