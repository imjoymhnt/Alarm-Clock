import React, { useEffect, useState } from "react";

const Time = () => {
  const [currentTime, setCurrentTime] = useState(null);
  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
  }, [currentTime]);
  return <h1>{currentTime}</h1>;
};

export default Time;
