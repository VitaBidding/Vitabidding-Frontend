import React from 'react';
import styled from 'styled-components';
import Body from '../../components/VAuth/Body';
import GoogleloginV from '../../components/VAuth/googleloginV'
// import TwichloginV from '../../components/VAuth/twichloginV';
function BodyContainer(props) {
    return (
        <BodySection>
            <Body/>
            <GoogleloginV/>
            {/* <TwichloginV/> */}
        </BodySection>
    );
}

export default BodyContainer;

const BodySection=styled.div`

    display: flex;
    flex-direction: column;

`;