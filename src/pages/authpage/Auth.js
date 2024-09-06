import React from "react";
import styled from "styled-components";
import LogoContainer from "../../containers/Auth/LogoContainer";
import BodyContainer from "../../containers/Auth/BodyContainer";

function Auth() {
  return (
    <Section>
      <LogoContainer />
      <BodyContainer />
    </Section>
  );
}

export default Auth;

const Section = styled.div`
  /* border: 2px solid red; */
  flex-direction: column;
  height: 100vh;
  /* background-color: #303030; */
`;
