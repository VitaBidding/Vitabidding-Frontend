import React from "react";
import styled from "styled-components";
import SearchV from "../../containers/header/search.v";
import LogoContainer from "../../containers/header/logo.container";
import LoginContainer from "../../containers/header/login.container";
import AuctionContainer from "../../containers/auction/auction.container";
function AuctionPage() {
  return (
    <Section>
      <HeaderSection>
        <LogoContainer />
        <SearchV />
        <LoginContainer />
      </HeaderSection>
      <BodySection>
        <AuctionContainer />
      </BodySection>
    </Section>
  );
}

export default AuctionPage;

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
  background-color: #212832;
  z-index: 1000; /* Ensure it stays above other content */
  padding: 10px; /* Optional: add some padding */
`;

const BodySection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow-y: auto; /* Enable vertical scrolling if content overflows */
  width: 100%;
  background-color: #242633;
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
