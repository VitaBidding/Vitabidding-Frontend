import React from "react";
import styled from "styled-components";
import PointStatus from "../../components/main/point/point.status";
import ChargingHistory from "../../components/main/point/charging.history";
import PaymentDetails from "../../components/main/point/payment.details";
function PointContainer() {
  function onClickSection1() {
    window.open(
      `${process.env.REACT_APP_MAIN_CLIENT_URL}/pointadd`,
      "포인트 구매",
      "width=450, height=800"
    );
  }
  return (
    <Wrapper>
      <Section1 onClick={() => onClickSection1()}>
        <PointStatus />
        <Text>포인트 충전+</Text>
      </Section1>
      <Section2>
        <ChargingHistory />
      </Section2>
      <Section3>
        <PaymentDetails />
      </Section3>
    </Wrapper>
  );
}

export default PointContainer;

const Wrapper = styled.div`
  display: grid;
  height: calc(100vh - 110px);

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(7, 1fr);
  gap: 10px;
  padding: 15px 5px;
  @media only screen and (max-width: 280px) {
    width: calc(100vw - 5px);
  }
  @media only screen and (min-width: 280px) {
    width: calc(100vw - 5px);
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
    width: calc(100vw - 30px);
  }
  @media only screen and (min-width: 600px) {
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
`;

const Section1 = styled.div`
  background: linear-gradient(225deg, #efb73e 60%, #fd9800);
  border-radius: 10px;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transition: all 0.5s;
  }
`;

const Text = styled.div`
  color: #fff;
  font-weight: bold;
  transition: color 0.3s ease;

  ${Section1}:hover & {
    text-shadow: 2px 2px 2px black;
  }

  @media only screen and (max-width: 280px) {
    padding: 5px;
    font-size: 10pt;
  }
  @media only screen and (min-width: 280px) {
    padding: 5px;
    font-size: 10pt;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    padding: 10px;
    font-size: 14pt;
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
  background-color: #f8f9fa;
  border-radius: 10px;

  @media only screen and (max-width: 280px) {
    grid-column: 1 / 3;
    grid-row: 2 / 5;
  }
  @media only screen and (min-width: 280px) {
    grid-column: 1 / 3;
    grid-row: 2 / 5;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    grid-column: 1 / 2;
    grid-row: 2 / 8;
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
const Section3 = styled.div`
  background-color: #f8f9fa;
  border-radius: 10px;

  @media only screen and (max-width: 280px) {
    grid-column: 1 / 3;
    grid-row: 5 / 8;
  }
  @media only screen and (min-width: 280px) {
    grid-column: 1 / 3;
    grid-row: 5 / 8;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    grid-column: 2 / 3;
    grid-row: 2 / 8;
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
