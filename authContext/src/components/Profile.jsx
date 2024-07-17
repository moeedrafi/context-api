import React from "react";
import { useAuth } from "../context/authContext";

const Profile = () => {
  const { username, setUsername, showProfile, setShowProfile } = useAuth();

  // const logOut = (e) => {
  //   e.preventDefault();
  //   setShowProfile(!showProfile);
  // };

  return (
    <>
      <h1>Profile</h1>
      {showProfile && <h2>Username {username}</h2>}
      <button
        onClick={() => {
          setShowProfile(!showProfile);
          setUsername("");
        }}
      >
        Log Out
      </button>
    </>
  );
};

export default Profile;
