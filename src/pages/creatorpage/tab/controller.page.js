import React from "react";
import styled from "styled-components";
import ControllerContainer from "../../../containers/creator/controller.container";

function ControllerPage() {
  return (
    <Wrapper>
      <ControllerContainer />
    </Wrapper>
  );
}

export default ControllerPage;
const Wrapper = styled.div`
  /* border: 1px solid blue; */
  background: linear-gradient(45deg, #f8f9fa 60%, #e9ecef);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;
