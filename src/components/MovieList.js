import React, { useState } from "react";
import Text from "./Text";
import MovieCard from "./MovieCard";
import { useGenre } from "./GenreContext";

const MovieList = ({ onMovieClick }) => {
    const [search, setSearch] = useState("");
    const [genreFilter, setGenreFilter] = useState("All");
    const [showAllMovies, setShowAllMovies] = useState(false);
    const [showAllCartoons, setShowAllCartoons] = useState(false);

  const movies = [
    { 
      id: 1, 
      title: "Inception", 
      genre: "Sci-Fi", 
      rating: 8.8, 
      image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",  
      description: "It starred Leonardo DiCaprio as a corporate spy who steals secrets via a technology that allows him to enter people's dreams. The film turns on this character's attempt to move past the boundaries of the technology in order to actually plant an idea in a dreamer's head.", 
      watchLink: "https://kinogo.media/13306-nachalo.html" 
    },
    { 
      id: 2, 
      title: "Interstellar", 
      genre: "Adventure", 
      rating: 8.6, 
      image: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg", 
      description: "Interstellar is about Earth's last chance to find a habitable planet before a lack of resources causes the human race to go extinct. The film's protagonist is Cooper (Matthew McConaughey), a former NASA pilot who is tasked with leading a mission through a wormhole to find a habitable planet in another galaxy.",
      watchLink: "https://rutube.ru/video/17465fc541700b94ebd5648423675100/" 
    },
    { 
      id: 3, 
      title: "The Dark Knight", 
      genre: "Action", 
      rating: 9.0, 
      image: "https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg", 
      description: "The plot follows the vigilante Batman, police lieutenant James Gordon, and district attorney Harvey Dent, who form an alliance to dismantle organized crime in Gotham City. Their efforts are derailed by the Joker, an anarchistic mastermind who seeks to test how far Batman will go to save the city from chaos.",
      watchLink: "https://rutube.ru/video/74fb252e6f3a0e6eaedb0909dc6eaf29/"
    },
    { 
      id: 4, 
      title: "Avatar", 
      genre: "Sci-Fi", 
      rating: 7.9, 
      image: "https://image.tmdb.org/t/p/w300/kyeqWdyUXW608qlYkRqosgbbJyK.jpg" , 
      description: "Avatar is a 2009 epic science fiction film co-produced, co-edited, written, and directed by James Cameron. It features an ensemble cast including Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez and Sigourney Weaver.[6] The first installment in the Avatar film series, it is set in the mid-22nd century, when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable unobtanium,[c] a room-temperature superconductor mineral.",
      watchLink: "https://rutube.ru/video/2b28ced9e49b7204c7cfb5a8eda790a9/"
    },
    { 
      id: 5, 
      title: "Titanic", 
      genre: "Drama", 
      rating: 7.8, 
      image: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_.jpg", 
      description: "It was the largest and most luxurious passenger ship of its time and was reported to be unsinkable. Titanic, launched on May 31, 1911, and set sail on its maiden voyage from Southampton on April 10, 1912, with 2,240 passengers and crew on board.",
      watchLink: "https://rutube.ru/video/e9f12a9abcc7a2230f50496931ccec3f/"
    },
    { 
      id: 6, 
      title: "The Matrix", 
      genre: "Sci-Fi", 
      rating: 8.7, 
      image: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg", 
      description: "The Matrix is a simulated reality based on human civilization at its peak, designed to keep the subjugated humans oblivious and pacified. That simulation is the world Neo has been living in since birth.",
      watchLink: "https://rutube.ru/video/c68d9ffbe75b9ca5c0f2e5d75e9ae448/"
    },
    { 
      id: 7, 
      title: "Gladiator", 
      genre: "Action", 
      rating: 8.5, 
      image: "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png" , 
      description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      watchLink: "https://rutube.ru/video/4282c18411899128b37d1dda827bef97/"
    },
    { 
      id: 8, 
      title: "The Lord of the Rings", 
      genre: "Fantasy", 
      rating: 8.9, 
      image: "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_.jpg" , 
      description: "The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien's extensive knowledge of philology and folklore.",
      watchLink: "https://rutube.ru/video/6a20ed30f8b1368f21d36605b43f8ba0/"
    },
    { 
      id: 9, 
      title: "Forrest Gump", 
      genre: "Drama", 
      rating: 8.8, 
      image: "https://m.media-amazon.com/images/I/91++WV6FP4L._AC_UF1000,1000_QL80_.jpg", 
      description: "Forrest Gump, American film, released in 1994, that chronicled 30 years (from the 1950s through the early 1980s) of the life of a intellectually disabled man (played by Tom Hanks) in an unlikely fable that earned critical praise, large audiences, and six Academy Awards, including best picture.",
      watchLink: "https://rutube.ru/video/57fbde6070148b48688ac620ec9475d5/"
    },
    { 
      id: 10, 
      title: "The Shawshank Redemption", 
      genre: "Drama", 
      rating: 9.3, 
      image: "https://m.media-amazon.com/images/I/61-vQDr7ecL._AC_UF894,1000_QL80_.jpg" , 
      description: "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.",
      watchLink: "https://rutube.ru/video/cae96c24f81419ccd444ed151a169985/"
    },
    { 
      id: 11, 
      title: "Pulp Fiction", 
      genre: "Crime", 
      rating: 8.9, 
      image: "https://cdn-images.dzcdn.net/images/cover/f3d66e855e15ac75c9e3a085aa6697b6/0x1900-000000-80-0-0.jpg", 
      description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption. The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      watchLink: "https://rutube.ru/video/dde90105f5871177b07351e19ce01e21/"
    },
    { 
      id: 12, 
      title: "The Godfather", 
      genre: "Crime", 
      rating: 9.2, 
      image: "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" , 
      description: "The Godfather is set in the 1940s and takes place entirely within the world of the Corleones, a fictional New York Mafia family. It opens inside the dark office of the family patriarch, Don Vito Corleone (also known as the Godfather and played by Brando), on the wedding day of his daughter, Connie (Talia Shire).",
      watchLink: "hhttps://rutube.ru/video/39568c110b232ad19985fb3a339f486d/"
    }
  ];

  const cartoons = [
    { 
      id: 13, 
      title: "Up", 
      genre: "Animation", 
      rating: 8.2, 
      image: "https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg" , 
      description: "The film centers on Carl Fredricksen (Asner), an elderly widower who travels to South America with youngster Russell (Nagai) in order to fulfill a promise that he made to his late wife Ellie. In the jungle, they encounter an exotic bird and discover someone who has sinister plans to capture it.",
      watchLink: "https://rutube.ru/video/2d6140ad03a366357e6132ef389223f8/"
    },
    { 
      id: 14, 
      title: "The Lion King", 
      genre: "Animation", 
      rating: 8.5, 
      image: "https://m.media-amazon.com/images/I/71O29JaDRaL.jpg", 
      description: "This Disney animated feature follows the adventures of the young lion Simba (Jonathan Taylor Thomas), the heir of his father, Mufasa (James Earl Jones). Simba's wicked uncle, Scar (Jeremy Irons), plots to usurp Mufasa's throne by luring father and son into a stampede of wildebeests." ,
      watchLink: "https://rutube.ru/video/9719089b4bc4dd44aa253020ef5f7969/"
    },
    { 
      id: 15, 
      title: "Shrek", 
      genre: "Animation", 
      rating: 7.9, 
      image: "https://m.media-amazon.com/images/I/71h5hqRz-0L.jpg" , 
      description: "Shrek is a large, green-skinned, physically intimidating ogre with a Scottish accent. In Shrek Forever After, however, it is revealed that he is much smaller than the average ogre.",
      watchLink: "https://rutube.ru/video/fb1864170ab76a01bf064a7d2f39e6ea/"
    },
    { 
      id: 16, 
      title: "Ratatouille", 
      genre: "Animation", 
      rating: 8.0, 
      image: "https://c8.alamy.com/comp/BKA69P/ratatouille-year-2007-director-brad-bird-animation-movie-poster-usa-BKA69P.jpg", 
      description: "Set mostly in Paris, the plot follows a young rat Remy (Oswalt) who dreams of becoming a chef at Auguste Gusteau's (Garrett) restaurant and tries to achieve his goal by forming an unlikely alliance with the restaurant's garbage boy Alfredo Linguini (Romano).",
      watchLink: "https://rutube.ru/video/60a8c89da5d3fb2d4a35408b51541b21/"
    },
    { 
      id: 17, 
      title: "Frozen", 
      genre: "Animation", 
      rating: 7.4, 
      image: "https://upload.wikimedia.org/wikipedia/en/8/89/Frozen_II_%282019_animated_film%29.jpg", 
      description: "It follows Anna, the princess of Arendelle, who sets off on a journey with the iceman Kristoff, his reindeer Sven, and the snowman Olaf, to find her estranged sister Elsa after she accidentally traps their kingdom in eternal winter with her icy powers.",
      watchLink: "https://rutube.ru/video/687c5bc34d3a37b51edbec9a2d6a5e77/"
    },
    { 
      id: 18, 
      title: "Finding Nemo", 
      genre: "Animation", 
      rating: 8.1, 
      image: "https://m.media-amazon.com/images/I/61okEwMrP9S.jpg", 
      description: "In the colorful and warm tropical waters of the Great Barrier Reef, a Clown Fish named Marlin lives safe and secluded in his anemone home with his only son, Nemo. Fearful of the ocean and its unpredictable risks, he struggles to protect his son. Nemo, like all young fish, is eager to explore the mysterious reef.",
      watchLink: "https://rutube.ru/video/312d587243b4ac0f170537b38e76f245/"
    },
    { 
      id: 19, 
      title: "Coco", 
      genre: "Animation", 
      rating: 8.4, 
      image: "https://i.ebayimg.com/images/g/xNYAAOSwsSVi-5oN/s-l400.jpg", 
      description: "The story follows a 12-year-old boy named Miguel (Gonzalez) who is accidentally transported to the Land of the Dead, where he seeks the help of his deceased musician great-great-grandfather to return him to his family and reverse their ban on music.",
      watchLink: "https://rutube.ru/video/7257c7c37d2198d688c37c1fe4e493cc/"
    },
    { 
      id: 20, 
      title: "Toy Story", 
      genre: "Animation", 
      rating: 8.3, 
      image: "https://m.media-amazon.com/images/I/71aBLaC4TzL._AC_UF894,1000_QL80_.jpg", 
      description: "Taking place in a world where toys come to life when humans are not present, the plot of Toy Story focuses on the relationship between an old-fashioned pullstring cowboy doll named Woody and a modern space cadet action figure, Buzz Lightyear, as Woody develops jealousy towards Buzz when he becomes their owner Andy's favorite toy.",
      watchLink: "https://rutube.ru/video/1ea9cbc6ceed10d76295e4b293653086/"
    }
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
          <MovieCard
          key={movie.id}
          {...movie}
<<<<<<< HEAD
          onWatchClick={() => onMovieClick(movie)} // ← ВАЖНО!
=======
          onWatchClick={() => onMovieClick(movie)} 
>>>>>>> af8c3804d7e38d03589eaf6a5fcddb5053513834
        />        
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
          <MovieCard
          key={cartoon.id}
          {...cartoon}
<<<<<<< HEAD
          onWatchClick={() => onMovieClick(cartoon)} // тоже передай!
=======
          onWatchClick={() => onMovieClick(cartoon)}   
>>>>>>> af8c3804d7e38d03589eaf6a5fcddb5053513834
        />        
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