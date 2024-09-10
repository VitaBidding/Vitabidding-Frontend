import React from "react";
import styled from "styled-components";
import ListContainer from "../../../containers/Creator/tab/ListContainer";
function Listpage(props) {
  return (
    <Wrapper>
      <ListContainer />
    </Wrapper>
  );
}

export default Listpage;

const Wrapper = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  justify-content: center; /* 수평 중앙 정렬 */
  height: 100vh;
`;
