import React, { useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";
import About from "./components/About";
import Contact from "./components/Contact";
import { GenreProvider } from "./components/GenreContext";
import MovieModal from "./components/MovieModal";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const [selectedMovie, setSelectedMovie] = useState(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMovieClick = (movie) => setSelectedMovie(movie);
  const handleCloseModal = () => setSelectedMovie(null);

  return (
    <GenreProvider>
      <div className="app-container">
        <Header scrollToSection={scrollToSection} homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} />
        <main>
          <section ref={homeRef}>
            <MovieList onMovieClick={handleMovieClick} />
          </section>
          <section ref={aboutRef}>
            <About />
          </section>
          <section ref={contactRef}>
            <Contact />
          </section>
        </main>
        <Footer />
        {selectedMovie && (
          <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
        )}
      </div>
    </GenreProvider>
  );
}

export default App;
