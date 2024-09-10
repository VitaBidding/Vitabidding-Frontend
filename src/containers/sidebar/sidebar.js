import React from "react";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import whiteLogo from "../../assets/img/vitaBiddingLogoWhite.png";
function SidebarC(props) {
  function onclickURLLogo() {
    window.location.href = `${process.env.REACT_APP_MAIN_CLIENT_URL}/creator`;
  }
  return (
    <Section>
      <Logoimg src={whiteLogo} alt="" onClick={onclickURLLogo} />
      <Nav
        justify
        variant="pills"
        className="flex-column"
        defaultActiveKey=""
        navbarScroll={true}
      >
        <Nav.Item>
          <Nav.Link
            className="navlink"
            as={Link}
            to="/creator/widget"
            eventKey="widget"
          >
            경매 위젯
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="navlink"
            as={Link}
            to="/creator/enrollment"
            eventKey="enrollmet"
          >
            물품 등록
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="navlink"
            as={Link}
            to="/creator/list"
            eventKey="List"
          >
            물품 조회
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="navlink"
            as={Link}
            to="/creator/controller"
            eventKey="controller"
          >
            컨트롤러
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="navlink"
            as={Link}
            to="/creator/point"
            eventKey="point"
          >
            포인트 내역
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="navlink"
            as={Link}
            to="/creator/info"
            eventKey="info"
          >
            내 정보
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Section>
  );
}

export default SidebarC;

const Logoimg = styled.img`
  @media only screen and (max-width: 600px) {
    width: auto;
    height: auto;
    max-width: 200px;
    max-height: 200px;
  }
  @media only screen and (min-width: 600px) {
    width: auto;
    height: auto;
    max-width: 200px;
    max-height: 200px;
  }
  @media only screen and (min-width: 768px) {
    width: auto;
    height: auto;
    max-width: 300px;
    max-height: 300px;
  }
  @media only screen and (min-width: 992px) {
    width: auto;
    height: auto;
    max-width: 300px;
    max-height: 300px;
  }
  @media only screen and (min-width: 1200px) {
    width: auto;
    height: auto;
    max-width: 500px;
    max-height: 500px;
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 100vh;
  background-color: #212832;
  &::-webkit-scrollbar {
    width: 3px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
  .flex-column {
    /* border: 2px solid red; */
    margin: 20px 0;
  }
  .navlink {
    color: white;
    font-family: "NotoSansKR-Bold";
    font-weight: bold;
    font-size: larger;
  }
  @media only screen and (max-width: 600px) {
    /* width: 100px; */
  }
  @media only screen and (min-width: 600px) {
    /* width: 100px; */
  }
  @media only screen and (min-width: 768px) {
    /* width: 150px; */
  }
  @media only screen and (min-width: 992px) {
    width: 200px;
  }
  @media only screen and (min-width: 1200px) {
    width: 250px;
  }
`;
