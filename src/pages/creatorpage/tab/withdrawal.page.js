import React from "react";
import styled from "styled-components";
import WithdrawalContainer from "../../../containers/Creator/info/WithdrawalContainer";

function Withdrawalpage(props) {
  return (
    <Wrapper>
      <WithdrawalContainer />
    </Wrapper>
  );
}

export default Withdrawalpage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid blue; */
  width: 100%;
  justify-content: center;
  align-items: center;
`;
