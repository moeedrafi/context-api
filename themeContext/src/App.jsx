import React from "react";
import { useTheme } from "./context/ThemeContext";
import ToggleBtn from "./ToggleBtn";
import { Box } from "@mui/material";

const App = () => {
  const { darkMode } = useTheme();

  return (
    <div>
      {darkMode ? (
        <Box
          sx={{
            backgroundColor: darkMode ? "black" : "white",
            color: darkMode ? "white" : "black",
          }}
        >
          <h1>App</h1>
          <ToggleBtn />
        </Box>
      ) : (
        <Box
          sx={{
            backgroundColor: darkMode ? "black" : "white",
            color: darkMode ? "white" : "black",
          }}
        >
          <h1>App</h1>
          <ToggleBtn />
        </Box>
      )}
    </div>
  );
};

export default App;
