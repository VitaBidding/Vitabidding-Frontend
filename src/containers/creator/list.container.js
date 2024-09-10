import React from "react";
import ListComponent from "../../../components/Creator/listpage/ListComponent";
import styled from "styled-components";
function ListContainer(props) {
  return (
    <Wrapper>
      <ListComponent />
    </Wrapper>
  );
}

export default ListContainer;

const Wrapper = styled.div`
  display: flex;
  /* border: 1px solid black; */
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
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
