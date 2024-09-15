import React from "react";
import styled from "styled-components";
import BidlistContainer from "../../containers/main/bid.list.container";
function BidListpage(props) {
  return (
    <Wrapper>
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
