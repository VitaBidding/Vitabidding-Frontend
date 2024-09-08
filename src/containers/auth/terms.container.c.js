import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function TermsContainerC(props) {
  return (
    <Nav variant="tabs" defaultActiveKey="/Terms/detail/creator/usegepolicy">
      <Nav.Item>
        <Nav.Link className="navlink" as={Link} to="/Terms/detail/creator/usegepolicy">
          이용약관
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="navlink" as={Link} to="/Terms/detail/creator/personalinformation">
          개인정보동의
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          크리에이터전용
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default TermsContainerC;
