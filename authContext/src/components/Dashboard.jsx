import React from "react";
import { useAuth } from "../context/authContext";
import Profile from "./Profile";

const Dashboard = () => {
  const { username, setUsername, showProfile, setShowProfile } = useAuth();
  //   const logIn = (e) => {
  //     e.preventDefault();
  //     setIsLoggedIn(true);
  //     setAuthUser({
  //       Name: "John Doe",
  //     });
  //   };

  //   const logOut = (e) => {
  //     e.preventDefault();
  //     setIsLoggedIn(false);
  //     setAuthUser(null);
  //   };

  return (
    <>
      <input
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        type="text"
      />
      <input placeholder="Password" type="text" />
      <button onClick={() => setShowProfile(true)}>Log In</button>
      {/* {showProfile && <Profile />} */}
    </>
  );
};

export default Dashboard;
