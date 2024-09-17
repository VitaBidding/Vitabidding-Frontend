import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ItemList from "../../components/creator/controller/item.list";
import ItemImage from "../../components/creator/controller/item.image";
import ItemInfo from "../../components/creator/controller/item.info";
import AuctionBidStatus from "../../components/creator/controller/auction.bid.status";
import AuctionTimer from "../../components/creator/controller/auction.timer";
import AuctionProcess from "../../components/creator/controller/auction.process";
import AuctionSound from "../../components/creator/controller/auction.sound";

function ControllerContainer() {
  //선택 물품
  const [products, setProducts] = useState([
    "이름긴거테스트하는중선택진행일시정지",
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
  ]);
  const [selectproducts, setSelectedproducts] = useState(null);
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
        <ItemList
          products={products}
          setSelectedproducts={setSelectedproducts}
        />
      </Section1>
      <Section2>
        <ItemImage />
      </Section2>
      <Section3>
        <ItemInfo />
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
        <AuctionProcess
          setRunning={setRunning}
          // handleChoiceItem={handleChoiceItem}
          // handleplay={handleplay}
          // handlepuase={handlepuase}
        />
      </Section6>
      <Section7>
        <AuctionSound />
      </Section7>
    </Wrapper>
  );
}

export default ControllerContainer;

const Wrapper = styled.div`
  /* border: 1px solid red; */
  display: grid;
  height: calc(100vh - 50px);

  @media only screen and (max-width: 280px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(16, 1fr);
    width: calc(100vw - 20px);
    gap: 2px;
  }
  @media only screen and (min-width: 280px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(16, 1fr);
    width: calc(100vw - 20px);
    gap: 2px;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
    width: calc(100vw - 30px);
  }
  @media only screen and (min-width: 600px) {
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
    gap: 3px;
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const Section1 = styled.div`
  /* border: 1px solid black; */
  box-sizing: border-box;
  @media only screen and (max-width: 280px) {
    grid-column: 1 / 4;
    grid-row: 1 / 4;
  }
  @media only screen and (min-width: 280px) {
    grid-column: 1 / 4;
    grid-row: 1 / 4;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
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
    grid-row: 4 / 9;
  }
  @media only screen and (min-width: 280px) {
    grid-column: 1 / 4;
    grid-row: 4 / 9;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    grid-column: 1 / 2;
    grid-row: 3 / 7;
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
  /* border: 1px solid black; */
  overflow-x: auto;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  @media only screen and (max-width: 280px) {
    grid-column: 1/ 4;
    grid-row: 9 / 11;
  }
  @media only screen and (min-width: 280px) {
    grid-column: 1/ 4;
    grid-row: 9 / 11;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    grid-column: 1 / 2;
    grid-row: 7 / 9;
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
  /* border: 1px solid black; */

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
    grid-row: 3 / 4;
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
  /* border: 1px solid black;
   */

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
    grid-row: 4 / 7;
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
  /* border: 1px solid black; */

  overflow-x: auto;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;

  @media only screen and (max-width: 280px) {
    grid-column: 1 / 4;
    grid-row: 13 / 15;
  }
  @media only screen and (min-width: 280px) {
    grid-column: 1 / 4;
    grid-row: 13 / 15;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    grid-column: 2 / 3;
    grid-row: 7 / 8;
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

const Section7 = styled.div`
  /* border: 1px solid black; */

  overflow-x: auto;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;

  @media only screen and (max-width: 280px) {
    grid-column: 1 / 4;
    grid-row: 15 / 17;
  }
  @media only screen and (min-width: 280px) {
    grid-column: 1 / 4;
    grid-row: 15 / 17;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    grid-column: 2 / 3;
    grid-row: 8 / 9;
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
