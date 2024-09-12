import React from "react";
import styled from "styled-components";
import CreatormainContainer from "../../../containers/creator/dashboard.container";
function Creatordashboard(props) {
  return (
    <Wrapper>
      <CreatormainContainer />
    </Wrapper>
  );
}

export default Creatordashboard;

const Wrapper = styled.div`
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  justify-content: center; /* 수평 중앙 정렬 */
`;
