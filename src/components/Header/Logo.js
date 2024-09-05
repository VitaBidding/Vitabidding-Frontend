import React from 'react'
import Logopng from "../../assets/img/vitaBiddingLogo.png"
import styled from "styled-components";

function onclickURLLogo() {
    window.location.href = "https://localhost:3000";
  }

export default function Logo() {
  return (
    <div>
      <Logoimg src={Logopng} alt="" onClick={onclickURLLogo} />
    </div>
  )
}

const Logoimg = styled.img`
  /* border: 1px solid blue; */

  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
    display: block;
    width: auto;
    height: auto;
    max-width: 180px;
    max-height: 180px;
  }
 
`;
