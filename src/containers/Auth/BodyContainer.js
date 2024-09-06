import React from 'react';
import styled from 'styled-components';
import Body from '../../components/Auth/Body';
import Googlelogin from '../../components/Auth/googlelogin'
import Naverlogin from '../../components/Auth/naverlogin';
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