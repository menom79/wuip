import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import YouTube from 'react-youtube';

const MovieListItem = (props) => {
  const [movie, setMovie] = useState({});
  const [videoModal, setVideoModal] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${props.movie.id}?api_key=a6af289a5c361e87c895a3dcc7fc8016&append_to_response=videos`
        );
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [props.movie.id]);

  const openModal = (videoId) => {
    setVideoModal(true);
    setSelectedVideoId(videoId);
  };

  const closeVideoModal = () => {
    setVideoModal(false);
    setSelectedVideoId('');
  };

  let IMAGEPATH = 'http://image.tmdb.org/t/p/w500';
  let imageurl = IMAGEPATH + props.movie.poster_path;

  // get genres
  let genres = '';
  if (movie.genres && movie.genres.length > 0) {
    genres = movie.genres.map((genre) => genre.name).join(', ');
  }

  // get first youtube video
  let video = '';
  if (movie.videos && movie.videos.results && movie.videos.results.length > 0) {
    video = (
      <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => openModal(movie.videos.results[0].key)}>
        {movie.videos.results[0].name}
      </span>
    );
  }

  return (
    <div className="Movie">
      <img src={imageurl} alt={props.movie.original_title} />
      <p className="MovieTitle">
        {props.movie.original_title} : {props.movie.release_date}
      </p>
      <p className="MovieText">{props.movie.overview}</p>
      <span className="GenresText">Genres: {genres}</span>
      <br />
      <span className="VideosText">Video: {video}</span>

      {videoModal && (
        <Modal isOpen={videoModal} onRequestClose={closeVideoModal} style={modalStyles}>
          <YouTube videoId={selectedVideoId} />
          <button onClick={closeVideoModal}>Close Video</button>
        </Modal>
      )}
    </div>
  );
};

const modalStyles = {
  content: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    zIndex: 1000,
  },
};

const getYouTubeOptions = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
  
    // Calculate the width and height based on your requirements
    const width = screenWidth > 800 ? 800 : screenWidth - 20; // Adjust as needed
    const height = (width / 16) * 9; // Assuming a 16:9 aspect ratio
  
    return {
      width: `${width}px`,
      height: `${height}px`,
    };
}

export default MovieListItem;
