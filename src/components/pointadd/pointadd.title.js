import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
function PointaddTitle() {
  function CloseWindow() {
    window.close();
  }

  return (
    <Wrapper>
      <Blank />
      <Title>구매하기</Title>
      <IconSection onClick={() => CloseWindow()}>
        <IconClose />
      </IconSection>
    </Wrapper>
  );
}

export default PointaddTitle;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  font-family: "GmarketSansMedium";
  font-weight: bold;
  font-size: 13pt;
`;

const Blank = styled.div`
  width: 30px;
`;
const Title = styled.div``;
const IconSection = styled.div`
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: #e9ecef;

  &:hover {
    cursor: pointer;
  }
`;
const IconClose = styled(AiOutlineClose)`
  margin: 0;
  padding: 0;
`;
