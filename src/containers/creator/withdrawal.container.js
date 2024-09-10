import React from "react";
import styled from "styled-components";
import Withdrawal from "../../../components/Creator/info/Withdrawal";

function WithdrawalContainer(props) {
  return (
    <Section>
      <Withdrawal />
    </Section>
  );
}

export default WithdrawalContainer;

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;
