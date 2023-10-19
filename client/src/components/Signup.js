import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Signup() {
  const navigate = useNavigate();
  const { signup } = useContext(UserContext);
  const [errorList, setErrorList] = useState([]);
  const [userInfo, setUserInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
    bio: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userInfo);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((r) => r.json())
      .then((user) => {
        if (!user.errors) {
          signup(user);
          navigate("/");
        } else {
          const userErrors = user.errors.map((e) => <li>{e}</li>);
          setErrorList(userErrors);
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
    <div className="signup">
      <Navbar />
      <div className="signup-content">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="first_name"
            onChange={handleChange}
            value={userInfo.first_name}
            placeholder="First Name"
          ></input>
          <br />
          <input
            type="text"
            name="last_name"
            onChange={handleChange}
            value={userInfo.last_name}
            placeholder="Last Name"
          ></input>
          <br />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={userInfo.email}
            placeholder="Email"
          ></input>
          <br />
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={userInfo.username}
            placeholder="Username"
            autoComplete="username"
          ></input>
          <br />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={userInfo.password}
            placeholder="Password"
            autoComplete="new-password"
          ></input>
          <br />
          <input
            type="password"
            name="password_confirmation"
            onChange={handleChange}
            value={userInfo.password_confirmation}
            placeholder="Password Confirmation"
            autoComplete="new-password"
          ></input>
          <br />
          <textarea
            type="textarea"
            name="bio"
            onChange={handleChange}
            value={userInfo.bio}
            placeholder="Bio"
          ></textarea>
          <br />
          <button type="submit">Sign Up</button>
        </form>
        <ul>{errorList}</ul>
      </div>
    </div>
  );
}

export default Signup;
