import React from 'react';
import './App.css';
import Movie from './Movie';

const App = () => {
  const movies = [
    {
      title: 'Inception',
      poster: '/images/inception.jpg',
      theaterNumber: '1',
      showTime: '12:00 PM',
    },
    {
      title: 'The Shawshank Redemption',
      poster: '/images/the_shawshank_redemption.jpg',
      theaterNumber: '2',
      showTime: '3:00 PM',
    },
    {
      title: 'The Dark Knight',
      poster: '/images/dark_knight.jpg',
      theaterNumber: '3',
      showTime: '6:00 PM',
    },
    // Add more movies as needed
  ];

  return (
    <div className="App">
      <h1>Movie List</h1>
      <div className="movies-container">
        {movies.map((movie, index) => (
          <Movie key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
