import React from "react";
import styled from "styled-components";
import BubbleLeft from "./speech.bubble.left";
import BubbleRight from "./speech.bubble.right";
function AuctionBidStatus() {
  return (
    <Wrapper>
      <Title>경매 입찰 현황</Title>
      <StatusSection>
        <Right>
          <BubbleRight biduser="경매시작금액" bidprice="200,000" />
        </Right>
        <Left>
          <BubbleLeft biduser="마자용" bidprice="200,000" />
        </Left>
        <Left>
          <BubbleLeft
            biduser="로스트아크
            모코코미스터피자먹고싶다"
            bidprice="220,000"
          />
        </Left>
      </StatusSection>
    </Wrapper>
  );
}

export default AuctionBidStatus;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 3px;
  border-radius: 6px;
  background-color: #242633;
`;
const StatusSection = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  background-color: #242633;
  overflow-y: scroll;
  @media only screen and (max-width: 360px) {
    font-size: 9pt;
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
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fd9800;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  scrollbar-width: thin;
  scrollbar-color: #fd9800 transparent;
`;
const Title = styled.div`
  color: #fff;
  font-weight: bold;
  background-color: #242633;
  padding: 2px 5px;
  flex-shrink: 0;
  z-index: 1;
  @media only screen and (max-width: 280px) {
    font-size: 9pt;
  }
  @media only screen and (min-width: 280px) {
    font-size: 9pt;
  }
  @media only screen and (min-width: 360px) {
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
const Left = styled.div`
  display: flex;
  flex-direction: row;
`;
const Right = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
