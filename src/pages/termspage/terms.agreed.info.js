import React from "react";
import styled from "styled-components";
import TermInfoContainer from "../../containers/auth/term.Info.container";
import LogoContainer from "../../containers/auth/logo.container";
import "../../assets/bootstrap/bootstrapUnited.min.css";
function TermsAgreedV(props) {
  return (
    <Section>
      <LogoContainer />
      <TermInfoContainer />
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
