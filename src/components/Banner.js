// src/components/Banner.js
import React from "react";
import "../styles/Banner.css";
import titleImg from "../assets/titulo-foto.png";

function Banner() {
  const movie = {
    title: "Clube da Luta",
    overview: "Um trabalhador de escritório insatisfeito e um fabricante de sabão formam um clube de luta subterrâneo que evolui para algo muito, muito mais.",
    backdrop_path: "https://assets.mubicdn.net/images/artworks/617908/images-original.png?1689617231"
  };

  const truncate = (str, n) => str?.length > n ? str.substring(0, n - 1) + "..." : str;

  return (
    <header
      className="banner-container"
      style={{
        backgroundImage: `url("${movie.backdrop_path.replace("{format}", "jpg")}")`,
      }}
    >
      <div className="banner-content">
        <div className="banner-title" >
        <img
        className="banner-title-img"
        src={titleImg}
        alt="title"
      />
        </div>
        <div className="banner-description">
          <h2>{truncate(movie.overview, 150)}</h2>
        </div>
        <div className="banner-buttons-container">
          <button className="banner-button">Assistir</button>
          <button className="banner-button">Favoritos</button>
        </div>

        
      </div>
    </header>
  );
}

export default Banner;
