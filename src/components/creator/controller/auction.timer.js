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
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  background-color: #242633;
  @media only screen and (max-width: 360px) {
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
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
const Title = styled.div`
  color: #fff;
  font-weight: bold;

  margin: 2px;
  @media only screen and (max-width: 280px) {
    font-size: 8pt;
  }
  @media only screen and (min-width: 280px) {
    font-size: 8pt;
  }

  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
    font-size: 11pt;
  }
  @media only screen and (min-width: 600px) {
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
  color: #fff;
  font-weight: bold;
  margin: 2px;
  @media only screen and (max-width: 280px) {
    font-size: 9pt;
  }
  @media only screen and (min-width: 280px) {
    font-size: 10pt;
  }

  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
    font-size: 14pt;
  }
  @media only screen and (min-width: 600px) {
    font-size: 16pt;
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
