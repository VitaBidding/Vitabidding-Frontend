import React from "react";
import styled from "styled-components";
import KakaoImage from "../../assets/img/vitaBiddingLogoBlack.png";
function ItemImage(props) {
  return (
    <Wrapper>
      <SeletImg src={KakaoImage} />
    </Wrapper>
  );
}

export default ItemImage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #242633;
  @media only screen and (max-width: 360px) {
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
const SeletImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Maintains aspect ratio and fits the image within the container */
`;
