import React from "react";
import styled from "styled-components";
import TermContainer from "../../containers/auth/term.container.c";
import LogoContainer from "../../containers/auth/logo.container";
function TermsAgreedC(props) {
  return (
    <Section>
      <LogoContainer />
      <TermContainer />
    </Section>
  );
}

export default TermsAgreedC;

const Section = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
