import React from "react";
import styled from "styled-components";
import Thirdparty from "../../containers/thirdparty/thirdparty.container";
function ThirdpartyPage() {
  return (
    <Wrapper>
      <Thirdparty />
    </Wrapper>
  );
}

export default ThirdpartyPage;

const Wrapper = styled.div`
  background-color: transparent;
`;
