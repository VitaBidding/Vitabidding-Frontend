import React from "react";
import styled from "styled-components";
import { SiNaver } from "react-icons/si";
import {requestLoginNaver} from "../../lib/request"

function naverlogin(props) {

  return (
    <Section>
    <StyledButton onClick={()=>requestLoginNaver()}>
      <SiNaver className="icon" size={30}/>
      Login With Naver
    </StyledButton>
    </Section>
  );
}

export default naverlogin;

const Section = styled.div`

  justify-content: center;
  display: flex;
    @media only screen and (max-width: 600px) {
        margin: 20px;
    }
    @media only screen and (min-width: 600px) {
        margin: 10px 20px;
    }
    @media only screen and (min-width: 768px) {
        margin: 20px;
    }
    @media only screen and (min-width: 992px) {
        margin: 20px;
    }
    @media only screen and (min-width: 1200px) {
        margin: 20px;
    }
`;
const StyledButton = styled.button`
  background-color: #2EBD59;
  border: 1px solid #249446;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  outline: none;
  transition: background-color 0.3s ease;
  width: 230px;

  .icon {
    margin-right: 8px;
    border-right: 1px solid #249446;
    padding-right: 8px;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      border-right: 1px solid #4bd374;
    }
  }

  &:hover {
    background-color: #29a84f;
  }
`;