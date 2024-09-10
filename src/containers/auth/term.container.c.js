import React from 'react';
import styled from 'styled-components';
import TermsC from '../../components/auth/terms.c';
function TermContainerC(props) {
    return (
        <BodySection>
            <TermsC/>
        </BodySection>
    );
}

export default TermContainerC;

const BodySection=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;