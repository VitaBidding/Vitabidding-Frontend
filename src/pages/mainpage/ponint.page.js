import React from "react";
import styled from "styled-components";
import PointContainer from "../../containers/main/point.container";
function PonintPage() {
  return (
    <Wrapper>
      <PointContainer />
    </Wrapper>
  );
}

export default PonintPage;

const Wrapper = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  justify-content: center; /* 수평 중앙 정렬 */
`;
