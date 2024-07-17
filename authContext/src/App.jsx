import React from "react";
import { useAuth } from "./context/authContext";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

const App = () => {

  const { showProfile } = useAuth();

  return (
    <>
      {showProfile ? <Profile /> : <Dashboard />}
    </>
  );
};

export default App;