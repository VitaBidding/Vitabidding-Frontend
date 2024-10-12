import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import UserinfoLocalContainer from "../../containers/auth/user.info.local.container";
import UserinfoSocialContainer from "../../containers/auth/user.info.social.container";
import LogoContainer from "../../containers/auth/logo.container";

function Userinput(props) {
  return (
    <Section>
      <LogoContainer />
      <Routes>
        <Route exact path="/" element={<UserinfoLocalContainer />} />
        <Route path="/social" element={<UserinfoSocialContainer />} />
      </Routes>
    </Section>
  );
}

export default Userinput;

const Section = styled.div`
  /* border: 2px solid red; */
  /* width: auto; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
