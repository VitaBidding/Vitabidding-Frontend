import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import TermsContainerC from "../../containers/auth/terms.container.c";
import UsagePolicy from "../../components/auth/termsdetail/termsc/usage.policy.c";
import PersonalInformation from "../../components/auth/termsdetail/termsc/personal.information.c";
function TermsPageC(props) {
  return (
    <TermsPageCSection>
      <TermsContainerC />
      <Routes>
        <Route path="usegepolicy" element={<UsagePolicy />} />
        <Route path="personalInformation" element={<PersonalInformation />} />
      </Routes>
    </TermsPageCSection>
  );
}

export default TermsPageC;

const TermsPageCSection = styled.div`
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
