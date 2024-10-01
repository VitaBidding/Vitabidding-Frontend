import React, { useState } from "react";
import styled from "styled-components";

function MethodOfPayment({
  depositorName,
  setdepositorName,
  view_fk_phone,
  setview_fk_phone,
}) {
  const [isInputActive1, setIsInputActive1] = useState(false); // 입력 상태 관리
  const [isInputActive2, setIsInputActive2] = useState(false); // 입력 상태 관리
  function onChange(e) {
    const value = e.target.value.replace(/[^0-9]/g, ""); // 숫자가 아닌 문자는 제거
    setview_fk_phone(value);
  }

  return (
    <Wrapper>
      <Title>결제 수단</Title>
      <Method>
        <Select>계좌 이체</Select>
        <ContentSection>
          <Label>입금자명</Label>
          <InputBox isActive={isInputActive1}>
            <Inputcontents
              value={depositorName}
              placeholder="홍길동"
              onChange={(e) => setdepositorName(e.target.value)}
              onFocus={() => setIsInputActive1(true)} // 포커스 시 활성화
              onBlur={() => setIsInputActive1(false)} // 포커스 해제 시 비활성화
            />
          </InputBox>
          <Label>문자 받을 전화번호</Label>
          <InputBox isActive={isInputActive2}>
            <Inputcontents
              value={view_fk_phone}
              placeholder="01099991234"
              onChange={(e) => onChange(e)}
              onFocus={() => setIsInputActive2(true)} // 포커스 시 활성화
              onBlur={() => setIsInputActive2(false)} // 포커스 해제 시 비활성화
            />
          </InputBox>
        </ContentSection>
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
const Select = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: 2px solid #868e96;
`;
const ContentSection = styled.div`
  width: 100%;
  padding: 10px 0 0 0;
`;
const Label = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
`;
const InputBox = styled.div`
  border: 2px solid ${(props) => (props.isActive ? "#fd9800" : "lightgray")}; // 포커스 시 색상 변경
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "TheJamsil5Bold";
  padding: 10px;
  border-radius: 8px;
  margin: 2px 0 6px 0;
  &:hover {
    border-color: #fd9800;
  }
`;

const Inputcontents = styled.input`
  border: 0;
  padding: 0;
  margin: 0;
  outline: none;
  background-color: #f8f9fa;
  @media only screen and (max-width: 450px) {
    width: 150px;
  }
  @media only screen and (min-width: 450px) {
    width: 250px;
  }
`;
