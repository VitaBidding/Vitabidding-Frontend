import React from "react";
import styled from "styled-components";
import WidgetComponet from "../../components/creator/widget/widget.componet";
function WidgetContainer(props) {
  return (
    <Wrapper>
      <WidgetComponet />
    </Wrapper>
  );
}

export default WidgetContainer;

const Wrapper = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;

  @media only screen and (max-width: 280px) {
    width: 100%;
  }
  @media only screen and (min-width: 280px) {
    width: 100%;
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
    width: 90%;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
