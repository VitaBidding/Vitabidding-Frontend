import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
function ItemList({ products, setSelectedproducts }) {
  return (
    <Warpper>
      <Title>경매 물품 리스트</Title>
      <CardSection>
        {products.map((item, index) => (
          <ItmeCard>
            <Card.Img variant="top" src="holder.js/100px180" />
            <StyledCardBody>
              <StyledCardTitle>{index}</StyledCardTitle>
            </StyledCardBody>
          </ItmeCard>
        ))}
      </CardSection>
    </Warpper>
  );
}

export default ItemList;
const Warpper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 3px;
  border-radius: 0 0 6px 6px;
  background-color: #242633;
  @media only screen and (max-width: 280px) {
  }
  @media only screen and (min-width: 280px) {
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
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
  color: #fff;
  font-weight: bold;
`;

const CardSection = styled.div`
  border: 1px solid green;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: auto;
`;

const ItmeCard = styled(Card)`
  width: 110px;
  height: 110px;
  margin: 3px;
`;
const StyledCardBody = styled(Card.Body)`
  padding: 0; /* 패딩을 제거합니다 */
  margin: 0;
`;

const StyledCardTitle = styled(Card.Title)`
  padding: 0; /* 패딩을 제거합니다 */
  margin: 0;
`;
