import React from 'react';
import '../styles/MovieDetails.css';
import estrela from '../assets/estrela.png';
import axios from 'axios';

const MovieDetails = ({ movie, onClose }) => {

  const handleFavoriteClick = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8080/favs', {
        id: movie.idDb
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data); // Aqui você pode fazer o que quiser com a resposta da requisição
    } catch (error) {
      console.error('Error adding movie to favorites:', error);
    }
  };

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
            <button className="fav-button" onClick={handleFavoriteClick}>Favoritos</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
