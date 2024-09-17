import React from "react";
import styled from "styled-components";
function ItemDescriptiontextarea() {
  return (
    <Wrapper>
      <Descriptiontextarea>
        이름긴거테스트하는중선택진행일시정지
        <br />
        이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지
        이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지
        <br />
        이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지
        테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지
        <br />
        이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선
      </Descriptiontextarea>
    </Wrapper>
  );
}

export default ItemDescriptiontextarea;

const Wrapper = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #242633;
  @media only screen and (max-width: 360px) {
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
const Descriptiontextarea = styled.div`
  flex: 1; /* Title을 제외한 나머지 공간을 차지 */
  color: white;
  overflow-y: scroll;
  margin: 2px;
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
  font-size: 9pt;
`;
