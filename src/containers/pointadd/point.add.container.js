import React from "react";
import styled from "styled-components";
function PointAddContainer() {
  return <Wrapper>PointAddContainer</Wrapper>;
}

export default PointAddContainer;

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 800px;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;
