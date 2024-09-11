import React from "react";
import styled from "styled-components";
import Info from "../../components/creator/info/info.component";

function InfoContainers(props) {
  return (
    <Section>
      <Info />
    </Section>
  );
}

export default InfoContainers;

const Section = styled.div`
  width: 100%;
`;
