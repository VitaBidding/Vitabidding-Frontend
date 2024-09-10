import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function TermsContainerV(props) {
  return (
    <Nav variant="tabs" defaultActiveKey="/terms/detail/viewer/usegepolicy">
      <Nav.Item>
        <Nav.Link
          className="navlink"
          as={Link}
          to="/terms/detail/viewer/usegepolicy"
        >
          이용약관
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className="navlink"
          as={Link}
          to="/terms/detail/viewer/personalinformation"
        >
          개인정보동의
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          뷰어전용
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default TermsContainerV;
