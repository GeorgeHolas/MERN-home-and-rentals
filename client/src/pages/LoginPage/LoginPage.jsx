// LoginPage.jsx
import React, { useState } from "react";
import { setLogin } from "../../redux/state";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      /* Get data after fething*/
      const loggedIn = await response.json();
      if (loggedIn) {
        dispatch(
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token,
          })
        );
        navigate("/");
      }
    } catch (err) {
      console.log("Login failed", err.message);
    }
  };

  return (
    <div className="login">
      <div className="login_content">
        <form className="login_content_form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            autoComplete="email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            autoComplete="current-password"
            required
          />
          <button type="submit">Login</button>
        </form>
        <a href="/register">Do not have an account? Sign in!</a>
      </div>
    </div>
  );
};

export default LoginPage;
