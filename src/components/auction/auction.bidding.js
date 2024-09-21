import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
function AuctionBidding() {
  return (
    <Wrapper>
      <Title>보유 포인트 : 1,200,000 p</Title>
      <ButtonSection>
        <BiddingButton>1,000,000p 입찰하기</BiddingButton>
      </ButtonSection>
    </Wrapper>
  );
}

export default AuctionBidding;
const Wrapper = styled.div`
  /* border: 1px solid white; */
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 3px;
  background-color: #242633;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row-reverse;
  color: #fff;
  font-weight: bold;
  background-color: #242633;
  padding: 2px 5px;
  flex-shrink: 0;
  z-index: 1;
  @media only screen and (max-width: 280px) {
    font-size: 8pt;
  }
  @media only screen and (min-width: 280px) {
    font-size: 8pt;
  }
  @media only screen and (min-width: 360px) {
    font-size: 9pt;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    font-size: 11pt;
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

const ButtonSection = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #242633;
`;
const BiddingButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  @media only screen and (max-width: 280px) {
    padding: 6px 12px;
    font-size: 11pt;
  }
  @media only screen and (min-width: 280px) {
    padding: 6px 12px;
    font-size: 11pt;
  }
  @media only screen and (min-width: 360px) {
    padding: 6px 12px;
    font-size: 12pt;
  }
  @media only screen and (min-width: 420px) {
    padding: 8px 16px;
    font-size: 13pt;
  }
  @media only screen and (min-width: 600px) {
    padding: 12px 20px;
    font-size: 16pt;
  }
  @media only screen and (min-width: 768px) {
    padding: 18px 30px;
    font-size: 18pt;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
