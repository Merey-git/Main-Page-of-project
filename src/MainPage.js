import React from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css";

const MainPage = () => (
    <div className="main-container">
      <Header />
      <MovieList />
      <About />
      <Footer />
    </div>
  );

export default MainPage;
