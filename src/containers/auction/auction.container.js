import React, { useState } from "react";
import styled from "styled-components";
import AuctionTimer from "../../components/auction/auction.timer";
import AuctionBidStatus from "../../components/auction/auction.bid.status";
import ItemImage from "../../components/auction/item.image";
import ItemInfo from "../../components/auction/item.info";
import ItemDescriptiontextarea from "../../components/auction/item.descriptiontextarea";
import AuctionBidding from "../../components/auction/auction.bidding";
function AuctionContainer() {
  //타이머
  const initialTime = 600;
  const [time, setTime] = useState(initialTime * 100);
  const [running, setRunning] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);
  //biduser/cost
  const [bid, setbid] = useState([
    { biduser: "마자용", bidprice: "200,000" },
    { biduser: "로스트아크모코코미스터피자먹고싶다", bidprice: "220,000" },
    { biduser: "마자용", bidprice: "240,000" },
    { biduser: "로스트아크모코코미스터피자먹고싶다", bidprice: "260,000" },
    { biduser: "마자용", bidprice: "280,000" },
  ]);
  return (
    <Wrapper>
      <Section1>
        <ItemInfo />
      </Section1>
      <Section2>
        <ItemImage />
      </Section2>
      <Section3>
        <ItemDescriptiontextarea />
      </Section3>
      <Section4>
        <AuctionTimer
          time={time}
          setTime={setTime}
          running={running}
          setTimerFinished={setTimerFinished}
        />
      </Section4>
      <Section5>
        <AuctionBidStatus bid={bid} />
      </Section5>
      <Section6>
        <AuctionBidding />
      </Section6>
    </Wrapper>
  );
}

export default AuctionContainer;

const Wrapper = styled.div`
  display: grid;
  gap: 2px;
  @media only screen and (max-width: 280px) {
    height: calc(100vh - 70px);
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(15, 1fr);
    width: calc(100vw - 20px);
  }
  @media only screen and (min-width: 280px) {
    height: calc(100vh - 70px);
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(15, 1fr);
    width: calc(100vw - 20px);
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
    width: calc(100vw - 30px);
  }
  @media only screen and (min-width: 600px) {
    height: calc(100vh - 100px);
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(8, 1fr);
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    width: calc(100vw - 220px);
  }
  @media only screen and (min-width: 1200px) {
    width: calc(100vw - 300px);
  }
  @media only screen and (min-width: 1480px) {
  }
  background-color: white;
`;

const Section1 = styled.div`
  box-sizing: border-box;

  @media only screen and (max-width: 280px) {
    grid-column: 1 / 4;
    grid-row: 1 /3;
  }
  @media only screen and (min-width: 280px) {
    grid-column: 1 / 4;
    grid-row: 1 / 3;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
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
const Section2 = styled.div`
  @media only screen and (max-width: 280px) {
    grid-column: 1 / 4;
    grid-row: 3 / 8;
  }
  @media only screen and (min-width: 280px) {
    grid-column: 1 / 4;
    grid-row: 3 / 8;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    grid-column: 1 / 2;
    grid-row: 2 / 6;
    border-radius: 0 8px 8px 8px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
  overflow-x: auto;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f8f9fa;
  }

  &::-webkit-scrollbar-thumb {
    background: #868e96;
    border-radius: 10px;
  }
`;
const Section3 = styled.div`
  overflow-x: auto;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;

  @media only screen and (max-width: 280px) {
    grid-column: 1/ 4;
    grid-row: 8 / 11;
  }
  @media only screen and (min-width: 280px) {
    grid-column: 1/ 4;
    grid-row: 8 / 11;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    grid-column: 1 / 2;
    grid-row: 6 / 9;
    border-radius: 8px 8px 8px 0;
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
const Section4 = styled.div`
  overflow-x: auto;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;

  @media only screen and (max-width: 280px) {
    grid-column: 1 / 2;
    grid-row: 11 / 13;
  }
  @media only screen and (min-width: 280px) {
    grid-column: 1 / 2;
    grid-row: 11 / 13;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    border-radius: 8px 0 8px 8px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f8f9fa;
  }

  &::-webkit-scrollbar-thumb {
    background: #868e96;
    border-radius: 10px;
  }
`;

const Section5 = styled.div`
  overflow-x: auto;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;

  @media only screen and (max-width: 280px) {
    grid-column: 1 / 4;
    grid-row: 13 / 16;
  }
  @media only screen and (min-width: 280px) {
    grid-column: 1 / 4;
    grid-row: 13 / 16;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    grid-column: 2 / 3;
    grid-row: 3 / 7;
    border-radius: 8px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f8f9fa;
  }

  &::-webkit-scrollbar-thumb {
    background: #868e96;
    border-radius: 10px;
  }
`;
const Section6 = styled.div`
  overflow-x: auto;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;

  @media only screen and (max-width: 280px) {
    grid-column: 2 / 4;
    grid-row: 11 / 13;
  }
  @media only screen and (min-width: 280px) {
    grid-column: 2 / 4;
    grid-row: 11 / 13;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    grid-column: 2 / 3;
    grid-row: 7 / 9;
    border-radius: 8px 8px 0 8px;
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
