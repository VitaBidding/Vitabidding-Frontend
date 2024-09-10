import React from "react";
import styled from "styled-components";
import CreatormainComponents from "../../../components/Creator/main/CreatormainComponents";
function CreatormainContainer(props) {
  return (
    <Wrapper>
      <CreatormainComponents />
    </Wrapper>
  );
}

export default CreatormainContainer;
const Wrapper = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 90vh;
  @media only screen and (max-width: 600px) {
    width: 80vw;
  }
  @media only screen and (min-width: 600px) {
    width: 90vw;
  }
  @media only screen and (min-width: 768px) {
    width: 90vw;
  }
  @media only screen and (min-width: 992px) {
    width: 78vw;
  }
  @media only screen and (min-width: 1200px) {
    width: 78vw;
  }
  @media only screen and (min-width: 1480px) {
    width: 78vw;
  }
`;
