import React from "react";
import styled from "styled-components";
import Timer from "./timer";
function Statusboard({ time, running, setTime, setTimerFinished, EndComment }) {
  // { selectdate, biduser, bidpoint }//
  // const { item_name } = selectdate;
  const item_name = "감정(인) 명품 수석";
  const biduser = "최대열여섯글자아이디테스트중중중";
  const bidpoint = "12345670";
  const addCommas = (value) => {
    const parts = value.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };
  const formattedValue = addCommas(bidpoint);
  return (
    <StatusBoard>
      <Section1>
        <BidComent>경매물품</BidComent>
        <ItemName>{item_name}</ItemName>
      </Section1>
      <Section2>
        <BidComent>최고가입찰자</BidComent>
        <BidUser>{biduser}</BidUser>
      </Section2>
      <Section3>
        <BidComent>최고가포인트</BidComent>
        <Row>
          <BidPoint>{formattedValue}</BidPoint>
          <BidComent>&nbsp; 포인트 </BidComent>
        </Row>
      </Section3>
      <Section4>
        {!EndComment && (
          <Timer
            time={time}
            running={running}
            setTime={setTime}
            setTimerFinished={setTimerFinished}
          />
        )}
        {EndComment && <BidComent>경매 입찰이 종료되었습니다</BidComent>}
      </Section4>
    </StatusBoard>
  );
}

export default Statusboard;

const StatusBoard = styled.div`
  width: 100%;
  height: calc(100vw * 0.75); /* 800:600 비율 적용 */
  padding: 1rem;

  display: grid;
  grid-template-rows: repeat(4, 1fr);
  gap: 1rem;
`;
const Section1 = styled.div`
  grid-row: 1 / 2;
`;
const Section2 = styled.div`
  grid-row: 2 / 3;
`;
const Section3 = styled.div`
  grid-row: 3 / 4;
`;
const Section4 = styled.div`
  grid-row: 4 / 5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ItemName = styled.div`
  color: #000;
  font-family: "SBAggroB";
  text-shadow: -5px -5px 0 #fff, 5px -5px 0 #fff, -5px 5px 0 #fff,
    5px 5px 0 #fff; /* 검은색 외곽선 효과 */
  font-size: 36pt;
`;

const BidUser = styled.div`
  color: #efb73e;
  font-family: "SBAggroB";
  text-shadow: -5px -5px 0 #000, 5px -5px 0 #000, -5px 5px 0 #000,
    5px 5px 0 #000; /* 검은색 외곽선 효과 */
  font-size: 36pt;
`;

const BidPoint = styled.div`
  color: #fd9800;
  font-family: "SBAggroB";
  text-shadow: -5px -5px 0 #000, 5px -5px 0 #000, -5px 5px 0 #000,
    5px 5px 0 #000; /* 검은색 외곽선 효과 */
  font-size: 36pt;
`;

const BidComent = styled.div`
  color: #fff;
  font-family: "yg-jalnan";
  text-shadow: -5px -5px 0 #000, 5px -5px 0 #000, -5px 5px 0 #000,
    5px 5px 0 #000; /* 검은색 외곽선 효과 */
  font-size: 32pt;
`;
