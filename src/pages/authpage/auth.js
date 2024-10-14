import React from "react";
import styled from "styled-components";
import LogoContainer from "../../containers/auth/logo.container";
import BodyContainer from "../../containers/auth/body.container";
import "../../assets/bootstrap/bootstrapUnited.min.css";

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
