import React from "react";
import styled from "styled-components";

function ItemImage({ selectproduct }) {
  return (
    <Wrapper>
      <SeletImg src={selectproduct.img} alt="선택이미지" />
    </Wrapper>
  );
}

export default ItemImage;

const Wrapper = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
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
  width: 100%;
  height: 100%;
  object-fit: contain; /* Maintains aspect ratio and fits the image within the container */
`;
