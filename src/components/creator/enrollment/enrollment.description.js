import React from "react";
import styled from "styled-components";
function EnrollmentDescription({ item, handleInputChange }) {
  return (
    <DescriptionSection>
      <Descriptionlabel htmlFor="detailed_description">
        상세설명
      </Descriptionlabel>
      <Descriptioncontent>
        <Descriptiontextarea
          id="detailed_description"
          name="detailed_description"
          value={item.detailed_description}
          placeholder={
            "내용을 입력해주세요\nex)\nSS급, 진품 여부, 직접 제작\n물품에 대한 설명을 해주세요!"
          }
          onChange={handleInputChange}
        />
      </Descriptioncontent>
    </DescriptionSection>
  );
}

export default EnrollmentDescription;

// 상세설명
const DescriptionSection = styled.div`
  width: 100%;
  height: 100%;
  font-family: "KBO-Dia-Gothic_medium";
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Descriptionlabel = styled.label`
  /* border: 1px solid blue; */
  font-size: 12pt;
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
const Descriptioncontent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: row;
`;

const Descriptiontextarea = styled.textarea`
  font-family: "KBO-Dia-Gothic_light";
  width: 100%;
  height: 100%;
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
  overflow-y: scroll;
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fd9800;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  scrollbar-width: thin;
  scrollbar-color: #fd9800 transparent;

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
