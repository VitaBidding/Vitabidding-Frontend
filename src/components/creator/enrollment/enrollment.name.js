import React from "react";
import styled from "styled-components";
function EnrollmentName({ item, handleInputChange }) {
  return (
    <NameSection>
      <Namelabel htmlFor="item_name">제품이름</Namelabel>
      <Namecontent>
        <NameInput
          type="text"
          id="item_name"
          name="item_name"
          value={item.item_name}
          onChange={handleInputChange}
          placeholder="제품명을 입력하세요"
        />
      </Namecontent>
    </NameSection>
  );
}

const NameSection = styled.div`
  width: 100%;
  height: 100%;
  font-family: "KBO-Dia-Gothic_medium";
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Namelabel = styled.label`
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
const Namecontent = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
  display: flex;
  justify-content: row;
`;

const NameInput = styled.input`
  width: 100%;
  text-align: start;

  color: #000;
  border: none;
  border-radius: 10px;

  font-weight: bold;
  border: 2px solid lightgray;
  &:hover {
    border: 2px solid #fd9800;
    cursor: pointer;
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
export default EnrollmentName;
