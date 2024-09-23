import React from "react";
import styled from "styled-components";
function EnrollmentTitle() {
  return <Title>경매 물품 등록</Title>;
}

export default EnrollmentTitle;

const Title = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "KBO-Dia-Gothic_bold";
  color: #fd9800;

  @media only screen and (max-width: 280px) {
    font-size: 16pt;
    font-weight: bolder;
  }
  @media only screen and (min-width: 280px) {
    font-size: 16pt;
    font-weight: bolder;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    font-size: 20pt;
    font-weight: bolder;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
