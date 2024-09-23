import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
function EnrollmentStartPrice({ item, setItem }) {
  const [isInputActive, setIsInputActive] = useState(false); // 입력 상태 관리
  const addCommas = (value) => {
    const stringValue = String(value);
    const parts = stringValue.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };

  function resetpoint() {
    setItem((prevItem) => ({ ...prevItem, starting_price: 0 }));
  }

  const handlepriceChange = (event) => {
    const rawValue = event.target.value;
    const numericValue = rawValue.replace(/\D/g, ""); // 숫자 이외의 문자 제거
    setItem((prevItem) => ({ ...prevItem, starting_price: numericValue }));
  };
  function AddOneThousandPoint() {
    setItem((prevItem) => ({
      ...prevItem,
      starting_price: (parseInt(prevItem.starting_price) || 0) + 1000,
    }));
  }

  function AddTenThousandPoint() {
    setItem((prevItem) => ({
      ...prevItem,
      starting_price: (parseInt(prevItem.starting_price) || 0) + 10000,
    }));
  }

  function AddFiftyThousandPoint() {
    setItem((prevItem) => ({
      ...prevItem,
      starting_price: (parseInt(prevItem.starting_price) || 0) + 50000,
    }));
  }

  function AddOneHundredThousandPoint() {
    setItem((prevItem) => ({
      ...prevItem,
      starting_price: (parseInt(prevItem.starting_price) || 0) + 100000,
    }));
  }
  const formattedValue = addCommas(item.starting_price);
  return (
    <PriceSection>
      <Pricelabel htmlFor="starting_price">경매 시작 금액</Pricelabel>
      <PriceContents>
        <InputBox isActive={isInputActive}>
          <Inputcontents
            type="text"
            id="starting_price"
            name="starting_price"
            value={formattedValue}
            onChange={handlepriceChange}
            placeholder="숫자만 입력하세요"
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
          <AddButton onClick={() => AddOneHundredThousandPoint()}>
            <Plus>+</Plus> 100,000
          </AddButton>
        </AddSection>
      </PriceContents>
    </PriceSection>
  );
}

export default EnrollmentStartPrice;

//시작가격
const PriceSection = styled.div`
  width: 100%;
  height: 100%;
  font-family: "KBO-Dia-Gothic_medium";
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Pricelabel = styled.label`
  /* border: 1px solid blue; */
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  @media only screen and (max-width: 280px) {
    font-size: 7pt;
    padding: 0;
  }
  @media only screen and (min-width: 280px) {
    font-size: 7pt;
    padding: 0;
  }
  @media only screen and (min-width: 360px) {
    font-size: 9pt;
  }
  @media only screen and (min-width: 420px) {
    font-size: 12pt;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    padding: 3px 10px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const PriceContents = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
  display: flex;
  @media only screen and (max-width: 280px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 280px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const InputBox = styled.div`
  border: 2px solid ${(props) => (props.isActive ? "#fd9800" : "lightgray")}; // 포커스 시 색상 변경
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 8px;

  &:hover {
    border-color: #fd9800;
  }
  @media only screen and (max-width: 280px) {
    font-size: 7pt;
    margin: 0;
    padding: 5px;
  }
  @media only screen and (min-width: 280px) {
    font-size: 7pt;
    margin: 0;
    padding: 5px;
  }
  @media only screen and (min-width: 360px) {
    font-size: 9pt;
    margin: 0;
    padding: 5px;
  }
  @media only screen and (min-width: 420px) {
    font-size: 12pt;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    padding: 10px;
    margin: 0 10px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const Inputcontents = styled.input`
  border: 0;
  padding: 0;
  margin: 0;
  outline: none;

  font-weight: bold;
  @media only screen and (max-width: 280px) {
    width: 70%;
  }
  @media only screen and (min-width: 280px) {
    width: 70%;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const UnitSection = styled.div`
  font-family: "TheJamsil5Bold";
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
`;
const AddButton = styled.div`
  font-family: "TheJamsil5Bold";
  color: #495057;
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
  @media only screen and (max-width: 280px) {
    font-size: 7pt;
    padding: 5px;
    margin: 3px 10px 0 0;
  }
  @media only screen and (min-width: 280px) {
    font-size: 7pt;
    padding: 5px;
    margin: 3px 10px 0 0;
  }
  @media only screen and (min-width: 360px) {
    font-size: 9pt;
    padding: 5px;
    margin: 3px 10px 0 0;
  }
  @media only screen and (min-width: 420px) {
    font-size: 12pt;
    padding: 10px;
    margin: 3px 10px 0 0;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    padding: 10px;
    margin: 0 10px 0 0;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const AddTenThousand = styled.div`
  font-family: "TheJamsil5Bold";
  color: #495057;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #f8f9fa;
  padding: 10px;
  margin: 0 10px 0 0;
  &:hover {
    cursor: pointer;
    background-color: #e9ecef;
    color: #000;
  }
`;
const AddFiftyThousand = styled.div`
  font-family: "TheJamsil5Bold";
  color: #495057;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #f8f9fa;
  padding: 10px;
  margin: 0 10px 0 0;
  &:hover {
    cursor: pointer;
    background-color: #e9ecef;
    color: #000;
  }
`;

const AddOneHundredThousand = styled.div`
  font-family: "TheJamsil5Bold";
  color: #495057;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #f8f9fa;
  padding: 10px;
  margin: 0 10px 0 0;
  &:hover {
    cursor: pointer;
    background-color: #e9ecef;
    color: #000;
  }
`;
const Plus = styled.div`
  color: #fd9800;
  margin: 0 5px 0 0;
`;
