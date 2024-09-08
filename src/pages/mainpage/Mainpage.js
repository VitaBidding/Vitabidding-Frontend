import React from 'react'
import styled from "styled-components";
import SearchV from "../../containers/header/search.v";
import LogoContainer from "../../containers/header/logo.container"
import LoginContainer from '../../containers/header/login.container';
import "./bootstrapUnited.min.css"

export default function Mainpage() {
  return (
    <Section>

    <HeaderSection><LogoContainer/>        <SearchV /><LoginContainer/></HeaderSection>
    </Section>
  )
}
const Section=styled.div`  display: flex;
  justify-content: center;
  border: 1px solid violet;
  height: 150vh;
`
const HeaderSection = styled.div`
  /* border: 1px solid blue; */
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
        padding: 0.5vw 5vw;
    }
    @media only screen and (min-width: 1200px) {

    }
`;