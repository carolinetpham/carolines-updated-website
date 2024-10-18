import React, { useState, useEffect } from "react";
import "././ComponentStyleSheets/DateTime.css";

const DateTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="date-time-container">
      <span className="date-form">{formattedDate}</span>
      <span className="time-form">{formattedTime}</span>
    </div>
  );
};

export default DateTime;
