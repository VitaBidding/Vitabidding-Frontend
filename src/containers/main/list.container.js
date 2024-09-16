import React from "react";
import styled from "styled-components";
import ListComponent from "../../components/main/list/list.component";
function ListContainers(props) {
  return (
    <Section>
      <ListComponent />
    </Section>
  );
}

export default ListContainers;

const Section = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  /* overflow: auto; */
`;
