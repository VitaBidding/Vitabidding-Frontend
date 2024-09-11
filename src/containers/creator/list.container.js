import React from "react";
import ListComponent from "../../components/creator/listpage/list.component";
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
