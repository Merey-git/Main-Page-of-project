import React, { useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-container">
      <Header scrollToSection={scrollToSection} homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} />
      <main>
        <section ref={homeRef}>
          <MovieList />
        </section>
        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
