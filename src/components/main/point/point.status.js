import React from "react";
import styled from "styled-components";

function PointStatus() {
  return (
    <Wrapper>
      <Title>보유 포인트</Title>
      <Point>100,000,000 포인트</Point>
    </Wrapper>
  );
}

export default PointStatus;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 2px black;
  @media only screen and (max-width: 280px) {
    font-size: 10pt;
  }
  @media only screen and (min-width: 280px) {
    font-size: 10pt;
  }
  @media only screen and (min-width: 360px) {
    font-size: 12pt;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    font-size: 14pt;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    font-size: 16pt;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const Point = styled.div`
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 2px black;
  @media only screen and (max-width: 280px) {
    font-size: 10pt;
  }
  @media only screen and (min-width: 280px) {
    font-size: 10pt;
  }
  @media only screen and (min-width: 360px) {
    font-size: 12pt;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    font-size: 14pt;
  }

  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    font-size: 16pt;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
