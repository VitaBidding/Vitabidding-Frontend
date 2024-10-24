import React from "react";
import styled from "styled-components";

function ItemList({ products, setSelectedproduct }) {
  return (
    <Wrapper>
      <Title>경매 물품 리스트</Title>
      <CardSection>
        {products.map((item, index) => (
          <ItemCard key={index} onClick={() => setSelectedproduct(item)}>
            <StyledCardImg variant="top" src={item.img} alt={item.name} />
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
  font-size: 10pt;
`;

const CardSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  flex-wrap: nowrap;
  background-color: #242633;
  padding: 10px 0; // 상하 여백 추가

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

const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
  flex-shrink: 0;
  justify-content: flex-start;
  overflow: hidden; // 내부 요소가 카드 밖으로 나가지 않도록

  &:hover {
    cursor: pointer;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.5); // 호버 시 그림자 효과
  }
  aspect-ratio: 1 / 1;
  height: 100%;
  margin: 0 3px;
  overflow: hidden;
`;

const StyledCardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; // Ensures the image covers the card area without distortion
  transition: transform 0.3s ease; // Smooth transition for hover effect

  &:hover {
    transform: scale(1.05);
  }
`;
