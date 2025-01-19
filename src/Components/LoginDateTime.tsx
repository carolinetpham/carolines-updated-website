import React, { useState, useEffect } from "react";
import "././ComponentStyleSheets/LoginDateTime.css";

const LoginDateTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="login-date-time-container">
      <div className="time-format">
        <span className="time-form">{formattedTime}</span>
      </div>
      <div className="date-format">
        <span className="date-form">{formattedDate}</span>
      </div>
    </div>
  );
};

export default LoginDateTime;
