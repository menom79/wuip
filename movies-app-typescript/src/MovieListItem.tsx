// import 'react-modal/style.css';
import React, { useState } from 'react';
// import axios from 'axios';
import Modal from 'react-modal';
import YouTube from 'react-youtube';

interface Props {
  movie: {
    id: number;
    original_title: string;
    release_date: string;
    overview: string;
    poster_path: string;
    genres: { id: number; name: string }[];
    videos: { results: { key: string; name: string }[] };
  };
}

const MovieListItem: React.FC<Props> = (props) => {
  const [videoModal, setVideoModal] = useState<boolean>(false);
  const [selectedVideoId, setSelectedVideoId] = useState<string>('');

  const openModal = (videoId: string) => {
    setVideoModal(true);
    setSelectedVideoId(videoId);
  };

  const closeVideoModal = () => {
    setVideoModal(false);
    setSelectedVideoId('');
  };

  let IMAGEPATH = 'http://image.tmdb.org/t/p/w500';
  let imageurl = IMAGEPATH + props.movie.poster_path;

  let genres = '';
  if (props.movie.genres && props.movie.genres.length > 0) {
    genres = props.movie.genres.map((genre) => genre.name).join(', ');
  }

  let video: string | JSX.Element | null = null;

  if (props.movie.videos && props.movie.videos.results && props.movie.videos.results.length > 0) {
    video = (
      <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => openModal(props.movie.videos.results[0].key)}>
        {props.movie.videos.results[0].name}
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

const modalStyles: ReactModal.Styles = {
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
  

export default MovieListItem;
