import React from "react";
import styled from "styled-components";
import TermsV from "../../components/auth/terms.v";
function TermContainerV(props) {
  return (
    <BodySection>
      <TermsV />
    </BodySection>
  );
}

export default TermContainerV;

const BodySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
