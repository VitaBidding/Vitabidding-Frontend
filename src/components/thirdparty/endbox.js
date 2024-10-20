import React from "react";
import styled from "styled-components";
import EndImage from "../../assets/img/도장14초.gif";
function EndBox({ bidpoint, biduser }) {
  const addCommas = (value) => {
    const parts = (value || "").split(" ");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };
  const formattedValue = addCommas(bidpoint);
  return (
    <AS>
      <Seciton1>
        <MotionImage src={EndImage} alt="endImg" />
      </Seciton1>
      <BidInfo>
        <Row>
          <BidUser> {biduser} </BidUser>
          <BidComent> &nbsp;님이</BidComent>
        </Row>
        <Row>
          <BidPoint> {formattedValue}</BidPoint>
          <BidComent>&nbsp; 포인트에</BidComent>
        </Row>
        <Row>
          <BidComent>낙찰 받으셨습니다</BidComent>
        </Row>
      </BidInfo>
    </AS>
  );
}

export default EndBox;

const AS = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  height: calc(100vw * 0.75); /* 800:600 비율 적용 */
`;
const Seciton1 = styled.div`
  grid-row: 1 / 3;
  display: flex;
  justify-content: center;
`;
const MotionImage = styled.img`
  width: 600px;
  height: 100%;
`;

const BidInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "LOTTERIACHAB";
  grid-row: 3 / 4;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const BidUser = styled.div`
  color: #efb73e;
  font-family: "LOTTERIACHAB";
  text-shadow: -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000,
    3px 3px 0 #000; /* 검은색 외곽선 효과 */
  font-size: 30pt;
`;

const BidPoint = styled.div`
  color: #fd9800;
  font-family: "LOTTERIACHAB";
  text-shadow: -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000,
    3px 3px 0 #000; /* 검은색 외곽선 효과 */
  font-size: 30pt;
`;

const BidComent = styled.div`
  color: #fff;
  font-family: "LOTTERIACHAB";
  text-shadow: -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000,
    3px 3px 0 #000; /* 검은색 외곽선 효과 */
  font-size: 30pt;
`;
