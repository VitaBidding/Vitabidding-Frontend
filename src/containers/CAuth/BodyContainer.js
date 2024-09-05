import React from 'react';
import styled from 'styled-components';
import Body from '../../components/CAuth/Body';
import GoogleloginC from '../../components/CAuth/googleloginC'
// import TwichloginV from '../../components/VAuth/twichloginV';
function BodyContainer(props) {
    return (
        <BodySection>
            <Body/>
            <GoogleloginC/>
            {/* <TwichloginV/> */}
        </BodySection>
    );
}

export default BodyContainer;

const BodySection=styled.div`

    display: flex;
    flex-direction: column;

`;