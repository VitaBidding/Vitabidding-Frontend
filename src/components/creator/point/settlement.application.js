import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

function SettlementApplication() {
  return (
    <Wrapper>
      <Title>정산 가능 포인트</Title>

      <Point>100,000,000 포인트</Point>

      <SettlementButton variant="secondary">정산 신청</SettlementButton>
    </Wrapper>
  );
}

export default SettlementApplication;

const Wrapper = styled.div`
  font-family: GmarketSansMedium;

  @media only screen and (max-width: 280px) {
    padding: 20px 10px;
  }
  @media only screen and (min-width: 280px) {
    padding: 20px 10px;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    padding: 20px;
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
  /* font-weight: bold; */
  color: #fff;

  @media only screen and (max-width: 280px) {
    font-size: 8pt;
    margin: 5px 0;
  }
  @media only screen and (min-width: 280px) {
    font-size: 10pt;
    margin: 5px 0;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    margin: 10px;
    font-size: 12pt;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    font-size: 14pt;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const Point = styled.div`
  font-weight: bold;
  color: #fff;
  @media only screen and (max-width: 280px) {
    font-size: 8pt;
    margin: 5px 0;
  }
  @media only screen and (min-width: 280px) {
    font-size: 10pt;
    margin: 5px 0;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    font-size: 12pt;
    margin: 10px;
  }

  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    font-size: 14pt;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const SettlementButton = styled(Button)`
  width: 100%;
  height: 50px;
  margin: 10px 0;
  font-weight: bold;
  color: #fff;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;
