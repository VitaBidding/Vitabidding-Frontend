import React from "react";
import styled from "styled-components";
import { FaGoogle } from 'react-icons/fa';
import {requestLoginGoogleC} from "../../lib/request"

function googleloginC(props) {

  return (
    <Section>
    <StyledButton onClick={()=>requestLoginGoogleC()}>
      <FaGoogle className="icon" size={30}/>
      Login With Google
    </StyledButton>
    </Section>
  );
}

export default googleloginC;

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
  background-color: #3f85f4;
  border: 1px solid #0f66f1;
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

  .icon {
    margin-right: 8px;
    border-right: 1px solid #0f66f1;
    padding-right: 8px;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      border-right: 1px solid #6fa4f7;
    }
  }

  &:hover {
    background-color: #2776f3;
  }
`;