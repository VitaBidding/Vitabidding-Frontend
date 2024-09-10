import React from 'react';
import styled from 'styled-components';
import Body from '../../components/auth/body';

function BodyContainer(props) {
    return (
        <BodySection>
            <Body/>
        </BodySection>
    );
}

export default BodyContainer;

const BodySection=styled.div`

    display: flex;
    flex-direction: column;

`;