import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../../containers/sidebar/sidebar";
import Dropdown from "react-bootstrap/Dropdown";
import { VscThreeBars } from "react-icons/vsc";
import { FaRegUserCircle } from "react-icons/fa";
import { requestLogout } from "../../lib/request";
import Offcanvas from "../../containers/sidebar/offcanvas";
import Dashboard from "../creatorpage/tab/creator.dashboard";
import Widgetpage from "./tab/widget.page";
import Enrollmentpage from "./tab/enrollment.page";
import Listpage from "./tab/list.page";
// import Pointpage from "./tab/point.page";
import Info from "./tab/info.page";

function Index(props) {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  function LogOut() {
    requestLogout();
    window.location.href = `${process.env.REACT_APP_MAIN_CLIENT_URL}`;
  }
  return (
    <Wrapper>
      <SideSection>
        <Sidebar />
      </SideSection>
      <OffcanvasSection>
        <Offcanvas show={show} setShow={setShow} />
      </OffcanvasSection>
      <Col>
        <Topbar>
          <Dropdown>
            <CustomToggle>
              <UserIcon size={30} />
            </CustomToggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/">구매자 페이지</Dropdown.Item>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <Dropdown.Item onClick={() => LogOut()}>로그아웃</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <ThreeBarsButton onClick={handleShow}>
            <VscThreeBars size={25} />
          </ThreeBarsButton>
        </Topbar>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="widget" element={<Widgetpage />} />
          <Route path="enrollment" element={<Enrollmentpage />} />
          <Route path="list" element={<Listpage />} />
          {/* <Route path="point" element={<Pointpage />} /> */}
          <Route path="info/*" element={<Info />} />
        </Routes>
      </Col>
    </Wrapper>
  );
}

export default Index;

const Wrapper = styled.div`
  /* border: 2px solid gray; */
  display: flex;
  width: auto;
  justify-content: center;
`;

const ThreeBarsButton = styled.button`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border: 0;

  @media only screen and (max-width: 600px) {
    display: flex;
  }
  @media only screen and (min-width: 600px) {
    display: flex;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
  }
  @media only screen and (min-width: 992px) {
    display: none;
  }
  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;

const SideSection = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 992px) {
    display: flex;
  }
  @media only screen and (min-width: 1200px) {
    display: flex;
  }
`;

const OffcanvasSection = styled.div`
  @media only screen and (max-width: 600px) {
    /* border: 1px solid red; */
    display: flex;
  }
  @media only screen and (min-width: 600px) {
    display: flex;
    /* border: 1px solid red; */
  }
  @media only screen and (min-width: 768px) {
    display: flex;
  }
  @media only screen and (min-width: 992px) {
    display: none;
  }
  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    width: 90%;
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const Topbar = styled.div`
  display: flex;
  flex-direction: row-reverse;
  /* background-color: black; */

  justify-content: space-between;
  margin: 10px 0 0 0;
  padding: 0 10px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    width: 90%;
  }
  @media only screen and (min-width: 1200px) {
  }
`;

const UserIcon = styled(FaRegUserCircle)`
  transition: color 0.3s ease; /* 색상 변화 시 부드럽게 전환 */
  background-color: #212832;
  color: white; /* 마우스를 올렸을 때 색상 변경 */
  border-radius: 50%; /* 아이콘을 동그랗게 만듭니다 */

  &:hover {
    color: #212832; /* 마우스를 올렸을 때 색상 변경 */
    background-color: white;
    border-radius: 50%; /* 아이콘을 동그랗게 만듭니다 */
  }
`;

const CustomToggle = styled(Dropdown.Toggle)`
  background: none !important; /* 배경색 제거 */
  border: none !important; /* 테두리 제거 */
  box-shadow: none !important; /* 그림자 제거 */
  color: inherit; /* 텍스트 색상 상속 */
  padding: 0 !important; /* 필요에 따라 패딩 조절 */
  &::after {
    display: none;
  }
`;
