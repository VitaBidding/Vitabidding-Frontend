import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import InfoContainers from "../../containers/main/info.containers";
function InfomaitonPage() {
  return (
    <Wrapper>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <InfoContainers />
    </Wrapper>
  );
}

export default InfomaitonPage;

const Wrapper = styled.div`
  /* border: 1px solid black; */
  width: 100%;
`;
