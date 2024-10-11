import React from "react";
import styled from "styled-components";
import WidgetComponent from "../../components/creator/widget/widget.component";
import HowToComponent from "../../components/creator/widget/how.to.component";
function WidgetContainer(props) {
  return (
    <Wrapper>
      <Section1>
        <WidgetComponent />
      </Section1>
      <Section2>
        <HowToComponent />
      </Section2>
    </Wrapper>
  );
}

export default WidgetContainer;

const Wrapper = styled.div`
  /* border: 1px solid black; */
  height: calc(100vh - 50px);
  @media only screen and (max-width: 280px) {
    width: calc(100vw - 10px);
  }
  @media only screen and (min-width: 280px) {
    width: calc(100vw - 10px);
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    width: calc(100vw - 50px);
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    width: calc(100vw - 280px);
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const Section1 = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
`;
const Section2 = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
