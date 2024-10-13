import React from "react";
import styled from "styled-components";
import TermsInfo from "../../components/auth/terms.and.user.info";
function TermContainerV(props) {
  return (
    <BodySection>
      <TermsInfo />
    </BodySection>
  );
}

export default TermContainerV;

const BodySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
