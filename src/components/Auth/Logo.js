import React from 'react';
import styled from 'styled-components';
import whiteLogo from '../../assets/img/vitaBiddingLogoWhite.png'
function Logo(props) {
    function onclickURLLogo() {
        window.location.href = `${process.env.REACT_APP_MAIN_CLIENT_URL}`;
      }
    return (
        <div>
            <Logoimg src={whiteLogo} alt="" onClick={onclickURLLogo}/>
        </div>
    );
}

export default Logo;

const Logoimg=styled.img`
    @media only screen and (max-width: 600px) {
        width: auto;
        height: auto;
        max-width: 200px;
        max-height: 200px;
        padding: 10px;
    }
    @media only screen and (min-width: 600px) {
        width: auto;
        height: auto;
        max-width: 200px;
        max-height: 200px;
        padding: 10px;
    }
    @media only screen and (min-width: 768px) {
        width: auto;
        height: auto;
        max-width: 300px;
        max-height: 300px;
    }
    @media only screen and (min-width: 992px) {
        width: auto;
        height: auto;
        max-width: 300px;
        max-height: 300px;
    }
    @media only screen and (min-width: 1200px) {
        width: auto;
    height: auto;
    max-width: 500px;
    max-height: 500px;
    }
`;