// src/components/MovieDetails.jsx
import React from 'react';
import '../styles/MovieDetails.css';
import estrela from '../assets/estrela.png';
import axios from 'axios';

const MovieDetails = ({ movie, onClose, onFavoriteUpdate }) => {

  const handleFavoriteClick = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8081/favs', {
        id: movie.idDb
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data + "aaaaaaaaa"); // Aqui você pode fazer o que quiser com a resposta da requisição
      onFavoriteUpdate(); // Chame a função de atualização dos favoritos
    } catch (error) {
      console.error('Error adding movie to favorites:', error);
    }
  };

  const truncateOverview = (overview, maxLength) => {
    if (overview.length <= maxLength) {
      return overview;
    }

    const truncated = overview.slice(0, maxLength);
    const lastPeriodIndex = truncated.lastIndexOf('.');

    if (lastPeriodIndex === -1) {
      // Se não houver ponto final, apenas corte no limite de caracteres
      return truncated;
    }

    // Retorne o texto truncado até o último ponto final encontrado
    return truncated.slice(0, lastPeriodIndex + 1);
  };

  const truncatedOverview = truncateOverview(movie.overview, 450); // Ajuste o número conforme necessário

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
            <p className="overview">{truncatedOverview}</p>
            <div className="rating">
              <img src={estrela} alt="star"/>
              <p>{movie.vote_average / 2}</p>
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
