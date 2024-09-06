import React from "react";
import styled from "styled-components";
import UseinfoContainer from "../../containers/Auth/UseinfoContainer";
import LogoContainer from "../../containers/Auth/LogoContainer";

function Userinput(props) {

  return (
    <Section>
      <LogoContainer />
      <UseinfoContainer />
    </Section>
  );
}

export default Userinput;

const Section = styled.div`
  /* border: 2px solid red; */
/* width: auto; */    width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;