import React, { useState } from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import FoldersPage from "./Folders/index";
import LoginPage from "./Components/LoginForm";

const App: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);

  // Handle login and update username state
  const handleLogin = (name: string) => {
    console.log("Logging in as:", name);
    setUsername(name);
  };

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          {/* Login Page */}
          <Route
            path="/LoginPage/*"
            element={<LoginPage onLogin={handleLogin} />}
          />

          {/* Folders Page */}
          <Route
            path="/FoldersPage/*"
            element={
              username ? (
                <FoldersPage username={username} />
              ) : (
                <Navigate to="/LoginPage" />
              )
            }
          />

          {/* Default Route */}
          <Route path="*" element={<Navigate to="/LoginPage" />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
