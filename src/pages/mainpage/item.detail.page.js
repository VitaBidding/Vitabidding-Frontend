import React from "react";
import styled from "styled-components";
import DetailContainer from "../../containers/main/detail.container";
function Itemdetailpage(props) {
  return (
    <Wrapper>
      <DetailContainer />
    </Wrapper>
  );
}

export default Itemdetailpage;

const Wrapper = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  width: 100%;
  /* justify-content: center; */
  align-items: center;
`;
