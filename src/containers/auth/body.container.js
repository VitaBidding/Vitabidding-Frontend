import React from 'react';
import styled from 'styled-components';
// import Body from '../../components/Auth/body';
import Googlelogin from '../../components/auth/google.login'
import Naverlogin from '../../components/auth/naver.login';
// import TwichloginV from '../../components/VAuth/twichloginV';
function BodyContainer(props) {
    return (
        <BodySection>
            {/* <Body/> */}
            <Googlelogin/>
            <Naverlogin/>
            {/* <TwichloginV/> */}
        </BodySection>
    );
}

export default BodyContainer;

const BodySection=styled.div`

    display: flex;
    flex-direction: column;

`;