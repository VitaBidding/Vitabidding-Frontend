import React from "react";
import styled from "styled-components";
import Timer from "./timer";
function AuctionTimer({ time, running, setTime, setTimerFinished }) {
  return (
    <Wrapper>
      <Title>경매 남은 시간</Title>
      <TimerSection>
        <Timer
          time={time}
          setTime={setTime}
          running={running}
          setTimerFinished={setTimerFinished}
        />
      </TimerSection>
    </Wrapper>
  );
}

export default AuctionTimer;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3px;
  width: 100%;
  height: 100%;
  background-color: #242633;
`;
const Title = styled.div`
  color: #fff;
  font-weight: bold;

  @media only screen and (max-width: 280px) {
    display: flex;
    justify-content: center;
    font-size: 8pt;
  }
  @media only screen and (min-width: 280px) {
    display: flex;
    justify-content: center;
    font-size: 8pt;
  }
  @media only screen and (min-width: 360px) {
    font-size: 9pt;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    justify-content: flex-start;
    font-size: 11pt;
    padding: 2px 5px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const TimerSection = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;
  font-weight: bold;

  @media only screen and (max-width: 280px) {
    font-size: 8pt;
  }
  @media only screen and (min-width: 280px) {
    font-size: 8pt;
  }

  @media only screen and (min-width: 360px) {
    font-size: 9pt;
    margin: 5px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    font-size: 11pt;
    margin: 10px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
