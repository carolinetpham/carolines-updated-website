import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiFaceSmile } from "react-icons/ci";
import "././ComponentStyleSheets/Login.css";

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
      setIsLoggingIn(true); // Set logging in state
      setTimeout(() => {
        onLogin(username);
        setIsLoggingIn(false);
        navigate("/FoldersPage"); // Navigate to the folders page after login
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
        <div className="login-style">
          <h1>Hi there!</h1>
          <p>
            Enter your name to explore <CiFaceSmile />
          </p>
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Your Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="name-input"
            />
            <button type="submit" className="login-button">
              Log in
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
