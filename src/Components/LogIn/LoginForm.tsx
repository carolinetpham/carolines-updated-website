import React, { useState } from "react";
import { CiFaceSmile } from "react-icons/ci";
import "./Login.css";

interface LoginPageProps {
  onLogin: (username: string) => void; // Prop to handle login state with username
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");

  // Handle login action
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username);
    }
  };

  return (
    <div className="login-page">
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
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;