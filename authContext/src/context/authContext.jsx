import React, { useContext, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}; //custom hook

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const value = { username, setUsername, showProfile, setShowProfile };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
