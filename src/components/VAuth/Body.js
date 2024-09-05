import React from 'react';
import styled from 'styled-components';

function Body(props) {
    return (
        <Section>
            시청자(구매자) 로그인
        </Section>
    );
}

export default Body;

const Section=styled.div`
    /* border: 1px solid red; */
    font-family: 'NotoSansKR-Medium';

    color: white;
    justify-content: center;
    display: flex;
    @media only screen and (max-width: 600px) {
        font-size: 18px;
    }
    @media only screen and (min-width: 600px) {
        font-size: 18px;
    }
    @media only screen and (min-width: 768px) {
        font-size: 24px;
    }
    @media only screen and (min-width: 992px) {
        font-size: 24px;
    }
    @media only screen and (min-width: 1200px) {
        font-size: 24px;
    }
`;