import React, { createContext, useContext, useState } from "react";

export const GenreContext = createContext();

export const GenreProvider = ({ children }) => {
  const [genre, setGenre] = useState("All");
  return (
    <GenreContext.Provider value={{ genre, setGenre }}>
      {children}
    </GenreContext.Provider>
  );
};

export const useGenre = () => useContext(GenreContext);
