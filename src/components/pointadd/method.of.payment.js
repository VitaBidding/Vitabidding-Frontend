import React from "react";
import styled from "styled-components";
import { FaSadTear } from "react-icons/fa";
function MethodOfPayment() {
  return (
    <Wrapper>
      <Title>결제 수단</Title>
      <Method>
        <FaSadTear size={200} />
        아직 없어요 ㅠ
      </Method>
    </Wrapper>
  );
}

export default MethodOfPayment;

const Wrapper = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "GmarketSansMedium";
  font-weight: bold;
  font-size: 13pt;
  padding: 20px;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Method = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  padding: 20px;
`;
