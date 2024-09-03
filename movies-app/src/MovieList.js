// MovieList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieListItem from './MovieListItem';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const apiKey = 'a6af289a5c361e87c895a3dcc7fc8016';

    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&append_to_response=videos`)
      .then(response => {
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching movie data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ flex: 1, padding: 20 }}>
        <p>Loading, please wait...</p>
      </div>
    );
  } else if (movies.length === 0) {
    return (
      <div style={{ flex: 1, padding: 20 }}>
        <p>Can't load movies.</p>
      </div>
    );
  } else {
    const movieItems = movies.map((movie, index) => (
      <MovieListItem key={index} movie={movie} />
    ));

    return (
      <div style={{ flex: 1, padding: 20 }}>
        {movieItems}
      </div>
    );
  }
}

export default MovieList;
