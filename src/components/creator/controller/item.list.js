import React from "react";
import styled from "styled-components";

function ItemList({ products, setSelectedproduct }) {
  return (
    <Wrapper>
      <Title>경매 물품 리스트</Title>
      <CardSection>
        {products.map((item, index) => (
          <ItemCard key={index} onClick={() => setSelectedproduct(item)}>
            <StyledCardImg variant="top" src={item.img} />
            <StyledCardBody>{item.name}</StyledCardBody>
          </ItemCard>
        ))}
      </CardSection>
    </Wrapper>
  );
}

export default ItemList;

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
    font-size: 10pt;
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

const CardSection = styled.div`
  flex: 1; /* Title을 제외한 나머지 공간을 차지 */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  flex-wrap: nowrap;
  background-color: #242633;

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

const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  aspect-ratio: 6/7; /* 정사각형 비율로 카드의 너비와 높이 설정 */
  height: 100%; /* CardSection의 높이에 맞춰 카드 높이를 설정 */
  margin: 2px;
  background-color: white;
  flex-shrink: 0;
  justify-content: flex-start;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

const StyledCardImg = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1; /* 너비에 맞춘 정사각형 비율 */
  object-fit: contain; /* 이미지가 카드 내부에 넘치지 않고 맞게 조정되도록 설정 */
`;

const StyledCardBody = styled.div`
  flex-grow: 1; /* 남는 공간을 채우도록 설정 */
  padding: 2px;
  color: white;
  background-color: #242633;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
    font-size: 10pt;
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
