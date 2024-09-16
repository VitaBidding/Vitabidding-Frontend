import React from "react";
import styled from "styled-components";

function PaymentDetails() {
  return (
    <Wrapper>
      <Title>포인트 사용 내역</Title>
    </Wrapper>
  );
}

export default PaymentDetails;

const Wrapper = styled.div`
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
  /* font-weight: bold; */
  color: #000;

  @media only screen and (max-width: 280px) {
    font-size: 8pt;
    margin: 5px 0;
  }
  @media only screen and (min-width: 280px) {
    font-size: 10pt;
    margin: 5px 0;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    margin: 10px;
    font-size: 12pt;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    font-size: 14pt;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
