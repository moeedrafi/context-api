import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "./context/ThemeContext";

const ToggleBtn = () => {
  const { toggle } = useTheme();

  return (
    <Button onClick={toggle}>Enable</Button>
  );
};

export default ToggleBtn;
