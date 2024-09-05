import React from 'react';
import styled from 'styled-components';
import TermsV from '../../../components/Auth/VAuth/TermsV';
function TermContainer(props) {
    return (
        <BodySection>
            <TermsV/>
        </BodySection>
    );
}

export default TermContainer;

const BodySection=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;