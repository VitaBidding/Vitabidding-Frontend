import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import SearchV from "../../containers/header/search.v";
import LogoContainer from "../../containers/header/logo.container";
import LoginContainer from "../../containers/header/login.container";
import Listpage from "./list.page";

import Pointpage from "../mainpage/ponint.page";
import BidList from "./bid.list.page";
import Infomaiton from "./infomaiton.page";
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
          <Route path="/point" element={<Pointpage />} />
          <Route path="/bidlist" element={<BidList />} />
          <Route path="/infomation" element={<Infomaiton />} />
        </Routes>
      </BodySection>
    </Section>
  );
}
const Section = styled.div`
  /* border: 1px solid violet; */
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
  z-index: 1000; /* Ensure it stays above other content */
  padding: 10px; /* Optional: add some padding */
`;

const BodySection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto; /* Enable vertical scrolling if content overflows */
  width: 100%;

  @media only screen and (max-width: 280px) {
    margin-top: 70px;
  }
  @media only screen and (min-width: 280px) {
    margin-top: 70px;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    margin-top: 100px;
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
