import React from "react";
import styled from "styled-components";
import Userinfo from "../../components/auth/terms.and.user.info";
function UserinfoContainer(props) {
  return (
    <BodySection>
      <Userinfo />
    </BodySection>
  );
}

export default UserinfoContainer;

const BodySection = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
