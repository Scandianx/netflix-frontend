import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Movies.css';

const Movies = ({onPosterClick}) => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const token = localStorage.getItem('token');
        const tokenBearer = 'Bearer ' + token;
        const response = await axios.get('http://localhost:8080/movies/homepage', {
          headers: {
            Authorization: tokenBearer
          }
        });
        setSections(response.data);
      } catch (error) {
        console.error('Error fetching sections:', error);
      }
    };

    fetchSections();
  }, []);

  return (
    <div className="movies-container">
      {sections.map((section, sectionIndex) => (
        section.posters && section.posters.length > 0 && (
          <div key={sectionIndex} className="movie-section">
            <h2 className="section-title">{section.title}</h2>
            <div className="movies-row">
              {section.posters.map((poster, posterIndex) => (
                <div key={`${sectionIndex}-${posterIndex}`} className="movie" onClick={() => onPosterClick(poster.id)}>
                  <img src={`https://image.tmdb.org/t/p/original${poster.poster}`} alt={`Movie ${poster.id}`} className="poster" />
                </div>
              ))}
            </div>
          </div>
        )
      ))}
    </div>
  );
}

export default Movies;
