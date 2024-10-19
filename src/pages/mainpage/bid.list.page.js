import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import BidlistContainer from "../../containers/main/bid.list.container";
function BidListpage(props) {
  return (
    <Wrapper>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <BidlistContainer />
    </Wrapper>
  );
}

export default BidListpage;
const Wrapper = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
