import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import TermsContainerV from "../../containers/auth/terms.container.v";
import PersonalInformation from "../../components/auth/termsdetail/termsv/personal.information.v";
import Usagepolicy from "../../components/auth/termsdetail/termsv/usage.policy.v";
import "../../assets/bootstrap/bootstrapUnited.min.css";
function TermsPageV(props) {
  return (
    <TermsPageVSection>
      <TermsContainerV />
      <Routes>
        <Route path="usegepolicy" element={<Usagepolicy />} />
        <Route path="personalInformation" element={<PersonalInformation />} />
      </Routes>
    </TermsPageVSection>
  );
}

export default TermsPageV;

const TermsPageVSection = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  width: 90vw;

  @media only screen and (max-width: 600px) {
    margin: 0.1rem 0.5rem;
  }
  @media only screen and (min-width: 600px) {
    margin: 0.1rem 0.5rem;
  }
  @media only screen and (min-width: 768px) {
    margin: 1rem 3rem;
  }
  @media only screen and (min-width: 992px) {
    margin: 1rem 3rem;
  }
  @media only screen and (min-width: 1200px) {
    margin: 3rem 5rem;
  }
`;
