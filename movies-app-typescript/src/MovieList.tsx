// MovieList.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieListItem from './MovieListItem';

interface Movie {
  id: number;
  original_title: string;
  release_date: string;
  overview: string;
  poster_path: string;
  genres: { id: number; name: string }[];
  videos: { results: { key: string; name: string }[] };
}

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const apiKey = 'a6af289a5c361e87c895a3dcc7fc8016';

    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&append_to_response=videos`)
      .then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ flex: 1, padding: 20 }}>Loading, please wait...</div>;
  } else if (movies.length === 0) {
    return <div style={{ flex: 1, padding: 20 }}>Can't load movies.</div>;
  } else {
    return (
      <div style={{ flex: 1, padding: 20 }}>
        {movies.map((movie, index) => (
          <MovieListItem key={index} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;
