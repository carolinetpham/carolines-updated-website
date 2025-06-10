import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "././ComponentStyleSheets/Login.css";
import LoginDateTime from "./LoginDateTime";

interface LoginPageProps {
  onLogin: (username: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const navigate = useNavigate();

  // Handle login action
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.trim()) {
      setIsLoggingIn(true);

      // Save to localStorage
      localStorage.setItem("visitorName", username);

      const scriptUrl = process.env.REACT_APP_GOOGLE_SCRIPT_URL;

      if (!scriptUrl) {
        console.error("Google Script URL is not defined in .env");
        return;
      }

      fetch(scriptUrl, {
        method: "POST",
        body: JSON.stringify({ name: username }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setTimeout(() => {
        onLogin(username);
        setIsLoggingIn(false);
        navigate("/FoldersPage");
      }, 2000);
    }
  };

  return (
    <div className="login-page">
      {isLoggingIn ? (
        <div className="full-screen-overlay">
          <h1>Logging in...</h1>
        </div>
      ) : (
        <>
          <LoginDateTime />
          <div className="login-style">
            <h1>Hi there!</h1>
            <p>Enter your name to explore</p>
            <form className="login-form" onSubmit={handleLogin}>
              <div className="login-input">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="name-input"
                />
              </div>
              <div className="login-align">
                <button type="submit" className="login-button">
                  Log in
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginPage;
