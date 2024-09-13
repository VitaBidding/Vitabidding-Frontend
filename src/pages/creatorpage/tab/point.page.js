import React from "react";
import styled from "styled-components";
import PointContainer from "../../../containers/creator/point.container";
function pointpage(props) {
  return (
    <Wrapper>
      <PointContainer />
    </Wrapper>
  );
}

export default pointpage;

const Wrapper = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  justify-content: center; /* 수평 중앙 정렬 */
`;
