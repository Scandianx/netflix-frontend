import React, { useEffect, useState } from "react";
import '../styles/Nav.css';
import MovieSearch from "./MovieSearch";

function Nav({ setSearchActive }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`nav-container ${show && "nav-container-black"}`}>
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix"
      />
      <MovieSearch setSearchActive={setSearchActive} />
      <img
        className="nav-avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU"
        alt="User Avatar"
      />
    </div>
  );
}

export default Nav;
