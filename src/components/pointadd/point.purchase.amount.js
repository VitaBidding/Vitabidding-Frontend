import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
function PointPurchaseAmount({ purchasePoint, setpurchasePoint }) {
  const [isInputActive, setIsInputActive] = useState(false); // 입력 상태 관리

  function onChange(e) {
    const value = e.target.value.replace(/[^0-9]/g, ""); // 숫자가 아닌 문자는 제거
    setpurchasePoint(value);
  }

  const formattedValue =
    purchasePoint !== null && purchasePoint !== undefined //0일경우 생략
      ? purchasePoint.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") // 세 자리마다 쉼표 추가
      : "";

  function resetpoint() {
    setpurchasePoint(0);
  }

  function AddOneThousandPoint() {
    setpurchasePoint((prev) => (parseInt(prev) || 0) + 1000);
  }

  function AddTenThousandPoint() {
    setpurchasePoint((prev) => (parseInt(prev) || 0) + 10000);
  }

  function AddFiftyThousandPoint() {
    setpurchasePoint((prev) => (parseInt(prev) || 0) + 50000);
  }
  return (
    <Wrapper>
      <Title>구매 금액</Title>
      <InputBox isActive={isInputActive}>
        <Inputcontents
          value={formattedValue}
          onChange={(e) => onChange(e)}
          onFocus={() => setIsInputActive(true)} // 포커스 시 활성화
          onBlur={() => setIsInputActive(false)} // 포커스 해제 시 비활성화
        />
        <UnitSection>
          <IconSection onClick={() => resetpoint()}>
            <IconReset />
          </IconSection>
          <InputUnit>포인트</InputUnit>
        </UnitSection>
      </InputBox>
      <AddSection>
        <AddButton onClick={() => AddOneThousandPoint()}>
          <Plus>+</Plus> 1,000
        </AddButton>
        <AddButton onClick={() => AddTenThousandPoint()}>
          <Plus>+</Plus> 10,000
        </AddButton>
        <AddButton onClick={() => AddFiftyThousandPoint()}>
          <Plus>+</Plus> 50,000
        </AddButton>
      </AddSection>
      <Comment>※ 구매 금액은 1,000 포인트 단위로만 결제 가능합니다.</Comment>
    </Wrapper>
  );
}

export default PointPurchaseAmount;

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

const InputBox = styled.div`
  border: 2px solid ${(props) => (props.isActive ? "#fd9800" : "lightgray")}; // 포커스 시 색상 변경
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "TheJamsil5Bold";
  padding: 14px;
  border-radius: 8px;
  margin: 8px 0 0 0;
  &:hover {
    border-color: #fd9800;
  }
`;

const Inputcontents = styled.input`
  border: 0;
  padding: 0;
  margin: 0;
  outline: none;
  @media only screen and (max-width: 450px) {
    width: 150px;
  }
  @media only screen and (min-width: 450px) {
    width: 250px;
  }
`;
const UnitSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconSection = styled.div`
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: #e9ecef;
  &:hover {
    cursor: pointer;
  }
`;
const IconReset = styled(AiOutlineClose)`
  margin: 0;
  padding: 0;
`;

const InputUnit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0 0 0 15px;
`;

const AddSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  font-size: 12pt;
  margin: 8px 0 0 0;
  font-family: "TheJamsil5Bold";
  color: #495057;
`;
const AddButton = styled.div`
  border: 1px solid lightgray;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  background-color: #f8f9fa;
  &:hover {
    cursor: pointer;
    background-color: #e9ecef;
    color: #000;
  }
  @media only screen and (max-width: 450px) {
    width: 100px;
    height: 40px;
  }
  @media only screen and (min-width: 450px) {
    width: 120px;
    height: 50px;
  }
`;

const Plus = styled.div`
  color: #fd9800;
  margin: 0 5px 0 0;
`;

const Comment = styled.div`
  width: 100%;
  font-size: 9pt;
  margin: 8px 0 0 0;
  color: #868e96;
  font-weight: 100;
`;
