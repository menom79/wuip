import React from 'react';
import './Movie.css';

const Movie = ({ title, poster, theaterNumber, showTime }) => {
  return (
    <div className="movie">
      <img src={poster} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <p>Theater: {theaterNumber}</p>
        <p>Show Time: {showTime}</p>
      </div>
    </div>
  );
};

export default Movie;
