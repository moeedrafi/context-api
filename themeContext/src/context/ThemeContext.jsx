import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
