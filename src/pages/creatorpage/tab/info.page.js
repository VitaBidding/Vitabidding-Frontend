import React from "react";
import styled from "styled-components";
import InfoContainers from "../../../containers/Creator/info/InfoContainers";
function Infopage(props) {
  return (
    <Wrapper>
      <InfoContainers />
    </Wrapper>
  );
}

export default Infopage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid blue; */
  width: 100%;
  justify-content: center;
  align-items: center;
`;
