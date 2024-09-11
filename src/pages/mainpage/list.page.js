import React from "react";
import styled from "styled-components";
import ListContainers from "../../containers/main/list.container";
function listpage(props) {
  return (
    <Wrapper>
      <ListContainers />
    </Wrapper>
  );
}

export default listpage;

const Wrapper = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
