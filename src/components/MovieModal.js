import React from "react";
import "../styles.css";

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="modal-overlay">
     <div className="modal-content">
      <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-body">
      <img src={movie.image} alt={movie.title} className="modal-image" />
      <div className="modal-details">
        <h2 className="modal-title">{movie.title}</h2>
        <p className="modal-genre"><strong>Genre:</strong> {movie.genre}</p>
        <p className="modal-rating"><strong>Rating:</strong> ⭐ {movie.rating}</p>
        <p className="modal-description">{movie.description}</p>
        <div className="modal-button-group">
              {movie.watchLink && (
                <a href={movie.watchLink} target="_blank" rel="noopener noreferrer">
                  <button className="modal-watch-btn">Watch Full Movie</button>
                </a>
              )}
        </div>
        <button className="modal-watch-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  </div>
</div>

  );
};

export default MovieModal;
