import React from "react";
import "./MovieCard.css";  

const MovieCard = ({ movie, onWatchClick }) => {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} className="movie-card-img" />
        <div className="movie-card-content">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-genre">{movie.genre}</p>
        <p className="movie-card-rating">Rating⭐: {movie.rating}</p>
        <button onClick={() => onWatchClick(movie)} className="watch-btn">
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;

