import React from "react";
import styled from "styled-components";
import EnrollmentPageComponent from "../../components/creator/enrollment/enrollment.page.component";
function EnrollmentContainer(props) {
  return (
    <Wrapper>
      <EnrollmentPageComponent />
    </Wrapper>
  );
}

export default EnrollmentContainer;

const Wrapper = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    width: 90%;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
