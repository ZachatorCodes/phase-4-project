import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState([]);
  const { login } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    })
      .then((r) => r.json())
      .then((user) => {
        if (!user.error) {
          login(user);
          navigate("/");
        } else {
          setError(<li>{user.error}</li>)
        }
      });
  }

  function handleChange(e) {
    console.log(`NAME: ${e.target.name} | VALUE: ${e.target.value}`);

    const name = e.target.name;
    const value = e.target.value;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  }

  return (
    <div className="Login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={userInfo.username}
          placeholder="Username"
          autoComplete="username"
        ></input>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={userInfo.password}
          placeholder="Password"
          autoComplete="current-password"
        ></input>
        <button type="submit">Log In</button>
      </form>
      <ul>{error}</ul>
    </div>
  );
}

export default Login;
