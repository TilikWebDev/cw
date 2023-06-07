import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const listOfThemes = ["dark", "orange", "purple", "light", "green"];

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme, listOfThemes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
