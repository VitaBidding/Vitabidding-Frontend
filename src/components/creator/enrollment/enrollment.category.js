import React from "react";
import styled from "styled-components";

function EnrollmentCategory({ item, handleInputChange }) {
  const categories = [
    "전자기기",
    "공구용품",
    "가구/인테리어",
    "도서",
    "의류",
    "뷰티/미용",
    "티켓/교환권",
    "게임",
    "음반",
    "식물",
    "기타",
  ];

  return (
    <CategorySection>
      <Categorylabel htmlFor="category">카테고리</Categorylabel>
      <Categorycontents>
        <Select
          id="category"
          name="category"
          value={item.category}
          onChange={handleInputChange}
          isDefault={item.category === ""}
        >
          <Option value="" disabled hidden>
            카테고리를 선택하세요
          </Option>
          {categories.map((category) => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))}
        </Select>
      </Categorycontents>
    </CategorySection>
  );
}

export default EnrollmentCategory;

//카테고리 섹션
const CategorySection = styled.div`
  width: 100%;
  height: 100%;
  font-family: "KBO-Dia-Gothic_medium";

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

//카테고리 라벨
const Categorylabel = styled.label`
  color: black;
  text-shadow: 1px 1px lightgray;
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

//카테고리 컨텐츠
const Categorycontents = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media only screen and (max-width: 280px) {
    padding: 0;
  }
  @media only screen and (min-width: 280px) {
    padding: 0;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    padding: 0 10px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

//Select 스타일링
const Select = styled.select`
  padding: 10px 0;
  margin: 0;
  text-align: center;

  color: ${({ isDefault }) => (isDefault ? "gray" : "#000")};
  border: none;
  border-radius: 10px;
  font-weight: bold;
  border: 2px solid lightgray;
  width: 100%;
  &:hover {
    border: 2px solid #fd9800;
    cursor: pointer;
  }
  @media only screen and (max-width: 280px) {
    padding: 5px 0;
    font-size: 7pt;
  }
  @media only screen and (min-width: 280px) {
    padding: 5px 0;
    font-size: 7pt;
  }
  @media only screen and (min-width: 360px) {
    font-size: 10pt;
  }
  @media only screen and (min-width: 420px) {
    padding: 10px 0;
    font-size: 12pt;
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

//Option 스타일링
const Option = styled.option`
  margin: 0;
  color: black;
  font-weight: bold;
  /* 아래는 일부 브라우저에서 동작할 수 있는 기본 스타일링 */
  background-color: white;

  &:checked {
    background-color: #fd9800; /* 선택되었을 때 보라색 배경 */
    color: white;
  }

  @media only screen and (max-width: 280px) {
    font-size: 9pt;
  }
  @media only screen and (min-width: 280px) {
    font-size: 9pt;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
    font-size: 12pt;
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
