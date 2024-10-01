import React, { useEffect } from "react";
import styled from "styled-components";
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

    return { minutes, seconds, hundredths };
  };

  const { minutes, seconds, hundredths } = formatTime(time);

  // 1500 milliseconds is 15 seconds
  const isWarning = time <= 1500; // 15 seconds * 100 milliseconds (1/100 seconds)

  return (
    <TimerContainer>
      {!isWarning && (
        <>
          <Minutes>{String(minutes).padStart(2, "0")}</Minutes>
          <Label>&nbsp;분&nbsp;</Label>
        </>
      )}
      <Seconds isWarning={isWarning}>
        {String(seconds).padStart(2, "0")}
      </Seconds>
      <Label isWarning={isWarning}>&nbsp;초&nbsp;</Label>
      {minutes === 0 && (
        <>
          <Milliseconds isWarning={isWarning}>
            {String(hundredths).padStart(2, "0")}
          </Milliseconds>
        </>
      )}
    </TimerContainer>
  );
}

export default Timer;

const TimerContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Minutes = styled.div`
  width: 100px;
  color: #000;
  font-family: "yg-jalnan";
  text-shadow: -5px -5px 0 #fff, 5px -5px 0 #fff, -5px 5px 0 #fff,
    5px 5px 0 #fff; /* 검은색 외곽선 효과 */
  font-size: 60pt;
`;

const Seconds = styled.div`
  width: ${(props) => (props.isWarning ? "150px" : "100px")};
  color: #fd9800;
  font-family: "yg-jalnan";
  text-shadow: -5px -5px 0 #000, 5px -5px 0 #000, -5px 5px 0 #000,
    5px 5px 0 #000; /* 검은색 외곽선 효과 */
  font-size: ${(props) => (props.isWarning ? "100pt" : "60pt")};
`;

const Milliseconds = styled.div`
  width: ${(props) => (props.isWarning ? "150px" : "100px")};
  color: #efb73e;
  font-family: "yg-jalnan";
  text-shadow: -5px -5px 0 #000, 5px -5px 0 #000, -5px 5px 0 #000,
    5px 5px 0 #000; /* 검은색 외곽선 효과 */
  font-size: ${(props) => (props.isWarning ? "100pt" : "60pt")};
`;

// For colon or text like "분", "초"
const Label = styled.div`
  width: ${(props) => (props.isWarning ? "160px" : "120px")};
  color: #fff;
  font-family: "yg-jalnan";
  text-shadow: -5px -5px 0 #000, 5px -5px 0 #000, -5px 5px 0 #000,
    5px 5px 0 #000; /* 검은색 외곽선 효과 */
  font-size: ${(props) => (props.isWarning ? "70pt" : "50pt")};
`;
