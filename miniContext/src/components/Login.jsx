import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [passoword, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, passoword });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        type="text"
      />
      {" "}
      <input
        value={passoword}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        type="text"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
