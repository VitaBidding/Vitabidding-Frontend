import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
function TitleComponet(props) {
  const location = useLocation();
  const { state } = location;
  const { item_name, category } = state;
  return (
    <BorderSection>
      <ProductTitle>{item_name}</ProductTitle>
      <Category> {category}</Category>
    </BorderSection>
  );
}

export default TitleComponet;
const BorderSection = styled.div`
  border-bottom: 1px solid black;
  @media only screen and (max-width: 360px) {
    margin: 5px 0 10px 0;
  }
  @media only screen and (min-width: 360px) {
    margin: 5px 0 10px 0;
  }
  @media only screen and (min-width: 420px) {
    margin: 10px 0 20px 0;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const ProductTitle = styled.h2`
  color: #000;
  font-family: "GmarketSansTTFMedium";
  @media only screen and (max-width: 360px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
  @media only screen and (min-width: 360px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
  @media only screen and (min-width: 420px) {
    font-size: 24px;
    margin-bottom: 10px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;

const Category = styled.p`
  @media only screen and (max-width: 360px) {
    font-size: 12px;
    margin-bottom: 5px;
  }
  @media only screen and (min-width: 360px) {
    font-size: 12px;
    margin-bottom: 5px;
  }
  @media only screen and (min-width: 420px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
