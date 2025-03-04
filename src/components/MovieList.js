import React, { useState } from "react";
import Text from "./Text";
import MovieCard from "./MovieCard";

const MovieList = () => {
    const [search, setSearch] = useState("");
    const [genreFilter, setGenreFilter] = useState("All");
    const [showAllMovies, setShowAllMovies] = useState(false);
    const [showAllCartoons, setShowAllCartoons] = useState(false);

  const movies = [
    { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8, image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg" },
    { id: 2, title: "Interstellar", genre: "Adventure", rating: 8.6, image: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg" },
    { id: 3, title: "The Dark Knight", genre: "Action", rating: 9.0, image: "https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
    { id: 4, title: "Avatar", genre: "Sci-Fi", rating: 7.9, image: "https://image.tmdb.org/t/p/w300/kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
    { id: 5, title: "Titanic", genre: "Drama", rating: 7.8, image: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_.jpg" },
    { id: 6, title: "The Matrix", genre: "Sci-Fi", rating: 8.7, image: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg" },
    { id: 7, title: "Gladiator", genre: "Action", rating: 8.5, image: "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png" },
    { id: 8, title: "The Lord of the Rings", genre: "Fantasy", rating: 8.9, image: "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_.jpg" },
    { id: 9, title: "Forrest Gump", genre: "Drama", rating: 8.8, image: "https://m.media-amazon.com/images/I/91++WV6FP4L._AC_UF1000,1000_QL80_.jpg" },
    { id: 10, title: "The Shawshank Redemption", genre: "Drama", rating: 9.3, image: "https://m.media-amazon.com/images/I/61-vQDr7ecL._AC_UF894,1000_QL80_.jpg" },
    { id: 11, title: "Pulp Fiction", genre: "Crime", rating: 8.9, image: "https://cdn-images.dzcdn.net/images/cover/f3d66e855e15ac75c9e3a085aa6697b6/0x1900-000000-80-0-0.jpg" },
    { id: 12, title: "The Godfather", genre: "Crime", rating: 9.2, image: "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" }
  ];

  const cartoons = [
    { id: 13, title: "Up", genre: "Animation", rating: 8.2, image: "https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg" },
    { id: 14, title: "The Lion King", genre: "Animation", rating: 8.5, image: "https://m.media-amazon.com/images/I/71O29JaDRaL.jpg" },
    { id: 15, title: "Shrek", genre: "Animation", rating: 7.9, image: "https://m.media-amazon.com/images/I/71h5hqRz-0L.jpg" },
    { id: 16, title: "Ratatouille", genre: "Animation", rating: 8.0, image: "https://c8.alamy.com/comp/BKA69P/ratatouille-year-2007-director-brad-bird-animation-movie-poster-usa-BKA69P.jpg" },
    { id: 17, title: "Frozen", genre: "Animation", rating: 7.4, image: "https://upload.wikimedia.org/wikipedia/en/8/89/Frozen_II_%282019_animated_film%29.jpg" },
    { id: 18, title: "Finding Nemo", genre: "Animation", rating: 8.1, image: "https://m.media-amazon.com/images/I/61okEwMrP9S.jpg" },
    { id: 19, title: "Coco", genre: "Animation", rating: 8.4, image: "https://i.ebayimg.com/images/g/xNYAAOSwsSVi-5oN/s-l400.jpg" },
    { id: 20, title: "Toy Story", genre: "Animation", rating: 8.3, image: "https://m.media-amazon.com/images/I/71aBLaC4TzL._AC_UF894,1000_QL80_.jpg" }
  ];

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase()) &&
    (genreFilter === "All" || movie.genre === genreFilter)
  );

  return (
    <div className="movie-list-container">
      <Text />
      <div className="search-bar">
        <input
          type="text"
          className="search-input styled-input rounded-input"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="genre-filter styled-select rounded-select" onChange={(e) => setGenreFilter(e.target.value)}>
          <option value="All">All Genres</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Adventure">Adventure</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Crime">Crime</option>
        </select>
      </div>
      <div className="header-container">
        <h2 className="section-title">The best films by genre</h2>
        <div className="title-line"></div>
      </div>
      <div className="movie-list">
      {(showAllMovies ? filteredMovies : filteredMovies.slice(0, 4)).map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
      {movies.length > 4 && (
        <button className="show-all-btn" onClick={() => setShowAllMovies(!showAllMovies)}>
          {showAllMovies ? "Скрыть" : "Посмотреть все"}
        </button>
      )}
      <h2 className="section-title">The best cartoons</h2>
      <div className="title-line"></div>
      <div className="movie-list">
      {(showAllCartoons ? cartoons : cartoons.slice(0, 4)).map((cartoon) => (
          <MovieCard key={cartoon.id} {...cartoon} />
        ))}
      </div>
      {cartoons.length > 4 && (
        <button className="show-all-btn" onClick={() => setShowAllCartoons(!showAllCartoons)}>
          {showAllCartoons ? "Скрыть" : "Посмотреть все"}
        </button>
      )}
    </div>
  );
};

export default MovieList;
