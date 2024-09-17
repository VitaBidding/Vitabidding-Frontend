import React from "react";
import styled from "styled-components";
function ItemInfo() {
  function onclickCreatorUrl() {
    window.open();
  }
  return (
    <Wrapper>
      <NameSection>
        이름긴거테스트하는중선택진행일시정이름긴거테스트중지하는중선택진행일
      </NameSection>
      <CategorySection>가구/인테리어</CategorySection>
      <CreatorName>판매자 : 슬리프이름긴거어어열일이삼사오육</CreatorName>
      <CreatorUrl onClick={() => onclickCreatorUrl()}>
        방송국 바로가기→
      </CreatorUrl>
    </Wrapper>
  );
}

export default ItemInfo;

const Wrapper = styled.div`
  /* border: 1px solid blue; */
  font-family: "GmarketSansMedium";
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  width: 100%;
  height: 100%;
  background-color: #242633;
`;

const NameSection = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 3;
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  text-shadow: 0 2px 2px black;
  line-height: 1;
  @media only screen and (max-width: 280px) {
    font-size: 10pt;
  }
  @media only screen and (min-width: 280px) {
    font-size: 10pt;
  }

  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
    font-size: 12pt;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    font-size: 16pt;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const CategorySection = styled.div`
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  display: flex;
  align-items: center;
  color: lightgray;
  @media only screen and (max-width: 280px) {
    font-size: 6pt;
  }
  @media only screen and (min-width: 280px) {
    font-size: 6pt;
  }

  @media only screen and (min-width: 360px) {
    font-size: 8pt;
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

const CreatorName = styled.div`
  grid-column: 1 / 3;
  grid-row: 4 / 5;
  display: flex;
  align-items: center;
  color: white;
  @media only screen and (max-width: 280px) {
    font-size: 6pt;
  }
  @media only screen and (min-width: 280px) {
    font-size: 6pt;
  }

  @media only screen and (min-width: 360px) {
    font-size: 8pt;
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

const CreatorUrl = styled.div`
  grid-column: 3 / 4;
  grid-row: 4 / 5;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  @media only screen and (max-width: 280px) {
    font-size: 6pt;
  }
  @media only screen and (min-width: 280px) {
    font-size: 6pt;
  }

  @media only screen and (min-width: 360px) {
    font-size: 8pt;
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
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;
