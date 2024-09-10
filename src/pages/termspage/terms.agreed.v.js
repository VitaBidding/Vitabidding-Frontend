import React from "react";
import styled from "styled-components";
import TermContainer from "../../containers/auth/term.container.v";
import LogoContainer from "../../containers/auth/logo.container";
import "../../assets/bootstrap/bootstrapUnited.min.css";
function TermsAgreedV(props) {
  return (
    <Section>
      <LogoContainer />
      <TermContainer />
    </Section>
  );
}

export default TermsAgreedV;

const Section = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
