import React from "react";
import styled from "styled-components";
function EnrollmentTitle() {
  return <Title>경매 물품 등록</Title>;
}

export default EnrollmentTitle;

const Title = styled.div`
  width: 100%;
  height: 80%;
  display: flex;

  font-weight: bolder;
  align-items: center;
  font-family: "KBO-Dia-Gothic_bold";
  color: white;
  background-color: #868e96;
  @media only screen and (max-width: 280px) {
    font-size: 7pt;
  }
  @media only screen and (min-width: 280px) {
    font-size: 7pt;
  }
  @media only screen and (min-width: 360px) {
    font-size: 10pt;
  }
  @media only screen and (min-width: 420px) {
    font-size: 11pt;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    padding: 10px;
    font-size: 20pt;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
