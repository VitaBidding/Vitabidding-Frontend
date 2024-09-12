import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
function ThumbnailComponet() {
  const location = useLocation();
  const { state } = location;

  // state로부터 필요한 데이터를 추출
  const { thumbnail } = state.Item_thumbnail;
  return (
    <ProductContainer>
      <ProductImage src={thumbnail} alt="Thumbnail" />
    </ProductContainer>
  );
}

export default ThumbnailComponet;

const ProductImage = styled.img`
  @media only screen and (max-width: 360px) {
    width: 270px;
    height: 270px;
  }
  @media only screen and (min-width: 360px) {
    width: 320px;
    height: 320px;
  }
  @media only screen and (min-width: 420px) {
    width: 350px;
    height: 350px;
  }
  @media only screen and (min-width: 600px) {
    width: 400px;
    height: 400px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    width: 450px;
    height: 450px;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 360px) {
    padding: 5px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  @media only screen and (min-width: 360px) {
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  @media only screen and (min-width: 420px) {
    padding: 10px;
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
`;
