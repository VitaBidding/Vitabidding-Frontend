import React, { useNavigate } from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

function Dashboardcontainer(props) {
  function onclickEnrollment() {
    window.location.href = `${process.env.REACT_APP_MAIN_CLIENT_URL}/creator/enrollment`;
  }
  function onclickWidget() {
    window.location.href = `${process.env.REACT_APP_MAIN_CLIENT_URL}/creator/widget`;
  }
  function onclickITemStaus() {
    window.location.href = `${process.env.REACT_APP_MAIN_CLIENT_URL}/creator/list`;
  }
  function onclickContoller() {
    window.location.href = `${process.env.REACT_APP_MAIN_CLIENT_URL}/creator/controller`;
  }
  function onclickPoint() {
    window.location.href = `${process.env.REACT_APP_MAIN_CLIENT_URL}/creator/info`;
  }
  return (
    <Wrapper>
      <Enrollment onClick={() => onclickEnrollment()}>
        물건 등록 &nbsp;
        <div>
          바로가기
          <FaArrowRight />
        </div>
      </Enrollment>
      <Widget onClick={() => onclickWidget()}>
        <IoSettingsSharp />
        위젯 <div>설정하기</div>
      </Widget>

      <ITemStaus onClick={() => onclickITemStaus()}>
        판매관리
        <div>판매 중인 아이템 확인</div>
      </ITemStaus>
      <Contoller onClick={() => onclickContoller()}>
        경매진행 <div>컨트롤러</div>
      </Contoller>
      <Point onClick={() => onclickPoint()}>포인트 환급 계좌 등록 하기</Point>
    </Wrapper>
  );
}

export default Dashboardcontainer;
const Wrapper = styled.div`
  /* border: 1px solid red; */
  display: grid;
  height: calc(100vh - 50px);

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 5px;
  padding: 10px 0;
  @media only screen and (max-width: 280px) {
    width: calc(100vw - 5px);
  }
  @media only screen and (min-width: 280px) {
    width: calc(100vw - 5px);
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
    width: calc(100vw - 30px);
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    width: calc(100vw - 220px);
  }
  @media only screen and (min-width: 1200px) {
    width: calc(100vw - 300px);
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Enrollment = styled.div`
  /* border: 1px solid black; */
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  background-color: #fd9800;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 420px) {
    font-size: 12pt;
    padding: 10px;
  }
  @media only screen and (min-width: 420px) {
    font-size: 14pt;
    padding: 20px;
  }
  &:hover {
    transform: scale(1.001);
    transition: all 2s;
    background-color: white;
    color: #fd9800;
    @media only screen and (max-width: 420px) {
      font-size: 16pt;
    }
    @media only screen and (min-width: 420px) {
      font-size: 20pt;
    }
  }

  div {
    color: #fd9800;
  }
`;

const Widget = styled.div`
  background-color: white;
  color: #212832;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 420px) {
    font-size: 12pt;
    padding: 10px;
  }
  @media only screen and (min-width: 420px) {
    font-size: 14pt;
    padding: 20px;
  }
  &:hover {
    transform: scale(1.001);
    transition: all 2s;
    background-color: #fd9800;
    color: white;
    @media only screen and (max-width: 280px) {
      font-size: 14pt;
      padding: 5px;
    }
    @media only screen and (min-width: 280px) {
      font-size: 14pt;
      padding: 5px;
    }
    @media only screen and (min-width: 360px) {
      padding: 10px;
    }
    @media only screen and (min-width: 420px) {
    }
    @media only screen and (min-width: 420px) {
      font-size: 20pt;
    }
  }
  div {
    color: white;
  }
`;
const ITemStaus = styled.div`
  /* border: 1px solid black; */
  grid-column: 1 / 3;
  grid-row: 2 / 5;
  background-color: white;
  color: #fd9800;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 420px) {
    font-size: 14pt;
    padding: 10px;
  }
  @media only screen and (min-width: 420px) {
    font-size: 16pt;
    padding: 20px;
  }
  &:hover {
    transform: scale(1.001);
    transition: all 2s;
    background-color: #212832;
    color: white;
  }
  div {
    position: relative;
    bottom: 0;
    right: 0;
    color: white;
    padding: 10px;
  }
`;
const Contoller = styled.div`
  grid-column: 3 / 4;
  grid-row: 2 / 5;
  background-color: #fd9800;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  @media only screen and (max-width: 280px) {
    font-size: 10pt;
    padding: 5px;
  }
  @media only screen and (min-width: 280px) {
    font-size: 10pt;
    padding: 5px;
  }
  @media only screen and (min-width: 360px) {
    font-size: 12pt;
    padding: 10px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 420px) {
    font-size: 16pt;
    padding: 20px;
  }
  &:hover {
    transform: scale(1.001);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transition: all 2s;
    background-color: #212832;
    color: white;
    @media only screen and (max-width: 280px) {
      font-size: 12pt;
      padding: 5px;
    }
    @media only screen and (min-width: 280px) {
      font-size: 12pt;
      padding: 5px;
    }
    @media only screen and (min-width: 360px) {
      font-size: 16pt;
      padding: 10px;
    }
    @media only screen and (min-width: 420px) {
      font-size: 20pt;
    }
  }
`;
const Point = styled.div`
  /* border: 1px solid black; */
  grid-column: 1 / 4;
  grid-row: 5 / 6;

  background-color: #212832;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 280px) {
    font-size: 12pt;
    padding: 5px;
  }
  @media only screen and (min-width: 280px) {
    font-size: 12pt;
    padding: 5px;
  }
  @media only screen and (min-width: 360px) {
    font-size: 12pt;
    padding: 10px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 420px) {
    font-size: 16pt;
    padding: 20px;
  }
  &:hover {
    transform: scale(1.001);
    transition: all 2s;
    background-color: white;
    color: #fd9800;
    height: 180px;
  }
`;
