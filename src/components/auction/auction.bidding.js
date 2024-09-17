import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
function AuctionBidding() {
  return (
    <Wrapper>
      <BiddingButton>1,000,000p 입찰하기</BiddingButton>
    </Wrapper>
  );
}

export default AuctionBidding;
const Wrapper = styled.div`
  /* border: 1px solid white; */
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #242633;
`;

const BiddingButton = styled(Button)`
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
    padding: 8px 16px;
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
