import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import whiteLogo from "../../assets/img/vitaBiddingLogoWhite.png";
function OffcanvasC({ show, setShow }) {
  const handleClose = () => setShow(false);

  function onclickURLLogo() {
    window.location.href = `${process.env.REACT_APP_MAIN_CLIENT_URL}/creator`;
  }
  return (
    <Section show={show} onHide={handleClose}>
      <Offcanvas.Body>
        <Nav
          justify
          variant="pills"
          className="flex-column"
          defaultActiveKey=""
          navbarScroll={true}
        >
          <Nav.Item>
            <Logoimg src={whiteLogo} alt="" onClick={onclickURLLogo} />
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="navlink"
              as={Link}
              to="/creator/widget"
              eventKey="widget"
              onClick={handleClose}
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
              onClick={handleClose}
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
              onClick={handleClose}
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
              onClick={handleClose}
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
              onClick={handleClose}
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
              onClick={handleClose}
            >
              내 정보
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Offcanvas.Body>
    </Section>
  );
}

export default OffcanvasC;

const Logoimg = styled.img`
  @media only screen and (max-width: 600px) {
    width: auto;
    height: auto;
    max-width: 200px;
    max-height: 200px;
    padding: 10px;
  }
  @media only screen and (min-width: 600px) {
    width: auto;
    height: auto;
    max-width: 200px;
    max-height: 200px;
    padding: 10px;
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

const Section = styled(Offcanvas)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  background-color: #212832;
  .Header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  .navlink {
    color: white;
    font-family: "NotoSansKR-Bold";
    font-size: larger;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 992px) {
    /* width: 150px; */
  }
  @media only screen and (min-width: 1200px) {
    /* width: 250px; */
  }
`;
