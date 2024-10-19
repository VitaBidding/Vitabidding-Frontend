import React from "react";
import Logopng from "../../assets/img/vitaBiddingLogo.png";
import styled from "styled-components";

export default function Logo() {
  const mainUrl = process.env.REACT_APP_MAIN_CLIENT_URL;

  return (
    <div>
      <a href={mainUrl} title="메인 페이지로 이동">
        <Logoimg src={Logopng} alt="로고" />
      </a>
    </div>
  );
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
