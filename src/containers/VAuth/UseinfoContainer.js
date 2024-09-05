import React from 'react';
import styled from 'styled-components';
import Userinfo from '../../../components/Auth/VAuth/Userinfo';
function UseinfoContainer(props) {
    return (
        <BodySection>
            <Userinfo/>
        </BodySection>
    );
}

export default UseinfoContainer;

const BodySection=styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
`;