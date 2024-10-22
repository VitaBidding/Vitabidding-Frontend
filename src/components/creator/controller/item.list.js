import React from "react";
import styled from "styled-components";

function ItemList({ products, setSelectedproduct }) {
  return (
    <Wrapper>
      <Title>경매 물품 리스트</Title>
      <CardSection>
        {products.map((item, index) => (
          <ItemCard key={index} onClick={() => setSelectedproduct(item)}>
            <StyledCardImg variant="top" src={item.img} alt="경매 물품" />
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

  // ... (스크롤바 스타일은 그대로 유지)
`;

const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px; // 고정 너비 설정
  height: 160px; // 고정 높이 설정
  margin: 0 3px; // 좌우 마진 조정
  background-color: white;
  flex-shrink: 0;
  justify-content: flex-start;
  overflow: hidden; // 내부 요소가 카드 밖으로 나가지 않도록

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 호버 시 그림자 효과
  }
`;

const StyledCardImg = styled.img`
  width: 100%;
  height: 120px; // 이미지 높이 고정
  object-fit: contain;
`;

const StyledCardBody = styled.div`
  flex-grow: 1;
  padding: 5px;
  color: white;
  background-color: #242633;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px; // 글자 크기 고정
  display: flex;
  align-items: center;
  justify-content: center;
`;
