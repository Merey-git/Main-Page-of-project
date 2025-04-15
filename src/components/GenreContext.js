import React, { createContext, useContext, useState } from "react";

export const GenreContext = createContext();
<<<<<<< HEAD
 
export const GenreProvider = ({ children }) => {
=======

export const GenreProvider = ({ children }) => { 
>>>>>>> 8a474d8 (test)
  const [genre, setGenre] = useState("All");
  return (
    <GenreContext.Provider value={{ genre, setGenre }}>
      {children}
    </GenreContext.Provider>
  );
};

export const useGenre = () => useContext(GenreContext); 

