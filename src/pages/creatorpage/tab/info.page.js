import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import InfoContainers from "../../../containers/creator/info.containers";
function Infopage(props) {
  return (
    <Wrapper>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <InfoContainers />
    </Wrapper>
  );
}

export default Infopage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid blue; */
  width: 100%;
  justify-content: center;
  align-items: center;
`;
