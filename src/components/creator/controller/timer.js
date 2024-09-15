import React, { useEffect } from "react";

function Timer({ time, running, setTime, setTimerFinished }) {
  useEffect(() => {
    let interval;
    if (running && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 10);
    } else if (time === 0) {
      clearInterval(interval);
      setTimerFinished(true);
    }
    return () => {
      clearInterval(interval);
    };
  }, [running, time]);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 100);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const hundredths = Math.floor((milliseconds % 100) / 1);

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    const formattedHundredths = String(hundredths).padStart(2, "0");

    return `${formattedMinutes}분 ${formattedSeconds}초 ${formattedHundredths}`;
  };
  return (
    <div>
      <div>{formatTime(time)}</div>
    </div>
  );
}

export default Timer;
