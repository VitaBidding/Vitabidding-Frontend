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
  display: flex;
  align-items: center;
  justify-content: center; /* 수평 중앙 정렬 */
  height: 100%;
  margin: 30px 0;
`;
