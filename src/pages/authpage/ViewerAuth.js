import React from "react";
import styled from "styled-components";
import LogoContainer from "../../containers/VAuth/LogoContainer";
import BodyContainer from "../../containers/VAuth/BodyContainer";

function ViewerAuth() {
  return (
    <Section>
      <LogoContainer />
      <BodyContainer />
    </Section>
  );
}

export default ViewerAuth;

const Section = styled.div`
  /* border: 2px solid red; */
  flex-direction: column;
  height: 100vh;
`;
