import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import BubbleLeft from "./speech.bubble.left";
import BubbleRight from "./speech.bubble.right";
import BubbleEnd from "./speech.bubble.end";
function AuctionBidStatus({ bid }) {
  const messagesEndRef = useRef(null);
  useEffect(() => {
    // 메시지 리스트가 업데이트될 때, 스크롤을 가장 아래로 이동
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [bid]);
  return (
    <Wrapper>
      <Title>
        <div>경매 입찰 현황</div>
        <div>참여자수 : 200 명</div>
      </Title>
      <StatusSection>
        <Right>
          <BubbleRight biduser="경매시작금액" bidprice="200,000" />
        </Right>
        <ul>
          {bid.map((index) => (
            <li key={index}>
              <Left>
                <BubbleLeft biduser={index.biduser} bidprice={index.bidprice} />
              </Left>
            </li>
          ))}
        </ul>
        <Right>
          <BubbleEnd biduser="잔망루피" bidprice="260,000" />
  
        </Right>
        <div ref={messagesEndRef} />
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
const Title = styled.div`
  display: flex;
  justify-content: space-between;
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
    font-size: 9pt;
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

  ul {
    margin: 0;
    padding: 0;
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
