import React from "react";
import styled from "styled-components";

import EnrollmentContainer from "../../../containers/creator/enrollment.container";
function Enrollmentpage(props) {
  return (
    <Wrapper>
      <EnrollmentContainer />
    </Wrapper>
  );
}

export default Enrollmentpage;

const Wrapper = styled.div`
  /* border: 1px solid black; */
  /* background: linear-gradient(45deg, #f8f9fa 60%, #e9ecef); */
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
