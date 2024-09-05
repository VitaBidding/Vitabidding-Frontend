import React from "react";
import styled from "styled-components";
import LogoContainer from "../../containers/CAuth/LogoContainer";
import BodyContainer from "../../containers/CAuth/BodyContainer";

function CreatorAuth() {
  return (
    <Section>
      <LogoContainer />
      <BodyContainer />
    </Section>
  );
}

export default CreatorAuth;

const Section = styled.div`
  /* border: 2px solid red; */
  flex-direction: column;
  height: 100vh;
  background-color: #303030;
`;
