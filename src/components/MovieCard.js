import React from "react";

const MovieCard = ({ title, genre, rating, image, onWatchClick }) => (
  <div className="movie-card">
    <img src={image} alt={title} className="movie-image" />
    <h2 className="movie-title">{title}</h2>
    <p className="movie-genre">{genre}</p>
    <p className="movie-rating">⭐ {rating}</p>
    <button className="watch-button" onClick={onWatchClick}>Watch Now</button>
  </div>
);

export default MovieCard;

