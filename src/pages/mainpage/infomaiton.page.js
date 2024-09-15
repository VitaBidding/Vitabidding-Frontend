import React from "react";
import styled from "styled-components";
import InfoContainers from "../../containers/main/info.containers";
function InfomaitonPage() {
  return (
    <Wrapper>
      <InfoContainers />
    </Wrapper>
  );
}

export default InfomaitonPage;

const Wrapper = styled.div`
  /* border: 1px solid black; */
  width: 100%;
`;
