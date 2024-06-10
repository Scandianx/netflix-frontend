import React from 'react';
import '../styles/Movies.css';

const Movies = () => {
  const sections = [
    {
      title: 'Em Alta',
      posters: [
        "https://image.tmdb.org/t/p/original/wigZBAmNrIhxp2FNGOROUAeHvdh.jpg",
        "https://image.tmdb.org/t/p/original/f7LgXutKkeOxHqx7p5rG7U4i9Qf.jpg",
        "https://image.tmdb.org/t/p/original/9XSOyim1pivuSHQqlrDj5gj2J5w.jpg",
        "https://image.tmdb.org/t/p/original/eBfLxyzwCCACTieZ2NH41m0jilk.jpg",
        "https://image.tmdb.org/t/p/original/aNK6MA5EApIo0UJE7ZWSYcZBJKy.jpg",
        "https://image.tmdb.org/t/p/original/e8pI4XkYgUMuSJ8cEFbJE18wc4e.jpg",
        "https://image.tmdb.org/t/p/original/9h2KgGXSmWigNTn3kQdEFFngj9i.jpg",
        "https://image.tmdb.org/t/p/original/rC5RqXtFoTkBhNWE1dczwi4dZrX.jpg",
        "https://image.tmdb.org/t/p/original/1OsQJEoSXBjduuCvDOlRhoEUaHu.jpg"
        
      ]
    },
    {
      title: 'Favoritos dos Usuários',
      posters: [
        "https://image.tmdb.org/t/p/original/e8pI4XkYgUMuSJ8cEFbJE18wc4e.jpg",
        "https://image.tmdb.org/t/p/original/9h2KgGXSmWigNTn3kQdEFFngj9i.jpg",
        "https://image.tmdb.org/t/p/original/rC5RqXtFoTkBhNWE1dczwi4dZrX.jpg",
        "https://image.tmdb.org/t/p/original/1OsQJEoSXBjduuCvDOlRhoEUaHu.jpg",
        "https://image.tmdb.org/t/p/original/aNK6MA5EApIo0UJE7ZWSYcZBJKy.jpg",
        "https://image.tmdb.org/t/p/original/wigZBAmNrIhxp2FNGOROUAeHvdh.jpg",
        "https://image.tmdb.org/t/p/original/f7LgXutKkeOxHqx7p5rG7U4i9Qf.jpg",
        "https://image.tmdb.org/t/p/original/9XSOyim1pivuSHQqlrDj5gj2J5w.jpg",
        "https://image.tmdb.org/t/p/original/eBfLxyzwCCACTieZ2NH41m0jilk.jpg"
        
      ]
    },
    {
      title: 'Indicações a Seu Gosto',
      posters: [
        "https://image.tmdb.org/t/p/original/1OsQJEoSXBjduuCvDOlRhoEUaHu.jpg",
        "https://image.tmdb.org/t/p/original/aNK6MA5EApIo0UJE7ZWSYcZBJKy.jpg",
        "https://image.tmdb.org/t/p/original/wigZBAmNrIhxp2FNGOROUAeHvdh.jpg",
        "https://image.tmdb.org/t/p/original/f7LgXutKkeOxHqx7p5rG7U4i9Qf.jpg",
        "https://image.tmdb.org/t/p/original/9XSOyim1pivuSHQqlrDj5gj2J5w.jpg",
        "https://image.tmdb.org/t/p/original/eBfLxyzwCCACTieZ2NH41m0jilk.jpg",
        "https://image.tmdb.org/t/p/original/e8pI4XkYgUMuSJ8cEFbJE18wc4e.jpg",
        "https://image.tmdb.org/t/p/original/9h2KgGXSmWigNTn3kQdEFFngj9i.jpg",
        "https://image.tmdb.org/t/p/original/rC5RqXtFoTkBhNWE1dczwi4dZrX.jpg"
        
      ]
    },
    {
      title: 'Novidades',
      posters: [
        "https://image.tmdb.org/t/p/original/aNK6MA5EApIo0UJE7ZWSYcZBJKy.jpg",
        "https://image.tmdb.org/t/p/original/e8pI4XkYgUMuSJ8cEFbJE18wc4e.jpg",
        "https://image.tmdb.org/t/p/original/9h2KgGXSmWigNTn3kQdEFFngj9i.jpg",
        "https://image.tmdb.org/t/p/original/rC5RqXtFoTkBhNWE1dczwi4dZrX.jpg",
        "https://image.tmdb.org/t/p/original/1OsQJEoSXBjduuCvDOlRhoEUaHu.jpg",
        "https://image.tmdb.org/t/p/original/wigZBAmNrIhxp2FNGOROUAeHvdh.jpg",
        "https://image.tmdb.org/t/p/original/f7LgXutKkeOxHqx7p5rG7U4i9Qf.jpg",
        "https://image.tmdb.org/t/p/original/9XSOyim1pivuSHQqlrDj5gj2J5w.jpg",
        "https://image.tmdb.org/t/p/original/eBfLxyzwCCACTieZ2NH41m0jilk.jpg"
       
      ]
    }
  ];

  return (
    <div className="movies-container">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="movie-section">
          <h2 className="section-title">{section.title}</h2>
          <div className="movies-row">
            {section.posters.map((poster, index) => (
              <div key={index} className="movie">
                <img src={poster} alt={`Movie ${index + 1}`} className="poster" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Movies;
