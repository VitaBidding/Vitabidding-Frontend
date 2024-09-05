import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/VAuth/Logo';

function LogoContainer(props) {
    return (
        <LogoSection>
            <Logo/> 
        </LogoSection>
    );
}

export default LogoContainer;

const LogoSection=styled.div`
    /* border: 3px solid red; */
        @media only screen and (max-width: 600px) {
            padding:3vh 0 0 0;
        }
        @media only screen and (min-width: 600px) {
            padding:3vh 0 0 0;
        }
        @media only screen and (min-width: 768px) {
            padding:3vh 0 0 0;
        }
        @media only screen and (min-width: 992px) {
            padding:3vh 0 0 0;
        }
        @media only screen and (min-width: 1200px) {
            padding:3vh 0 0 0;
        }
    display: flex;
    justify-content: center;
`;