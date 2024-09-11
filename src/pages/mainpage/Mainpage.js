import React from "react";
import styled from "styled-components";
import SearchV from "../../containers/header/search.v";
import LogoContainer from "../../containers/header/logo.container";
import LoginContainer from "../../containers/header/login.container";
import { Route, Routes } from "react-router-dom";
import Listpage from "./list.page";
import "../../assets/bootstrap/bootstrapUnited.min.css";

export default function Mainpage() {
  return (
    <Section>
      <HeaderSection>
        <LogoContainer />
        <SearchV />
        <LoginContainer />
      </HeaderSection>
      <BodySection>
        <Routes>
          <Route exact path="/" element={<Listpage />} />
          <Route path="/list" element={<Listpage />} />
          {/* <Route path="detail/:ItemID" element={<Itemdetailpage />} /> */}
          {/* <Route path="point" element={<Pointpage />} /> */}
          {/* <Route path="bidlist" element={<BidList />} /> */}
          {/* <Route path="info" element={<Info />} /> */}
          {/* <Route path="withdrawal" element={<Withdrawalpage />} /> */}
        </Routes>
      </BodySection>
    </Section>
  );
}
const Section = styled.div`
  border: 1px solid violet;
  display: flex;
  justify-content: center;
  height: 100%;
`;
const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 10;

  @media only screen and (max-width: 360px) {
    margin: 0;
  }
  @media only screen and (min-width: 360px) {
    margin: 0;
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
`;

const BodySection = styled.div`
  border: 1px solid blue;
  width: 100%;
`;
