import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import AdminContainer from "../../containers/admin/admin.container";
import LoginContainer from "../../containers/admin/login.container";
function AdminPage() {
  return (
    <Wrapper>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Routes>
        <Route exact path="/*" element={<AdminContainer />} />
        <Route path="/login" element={<LoginContainer />} />
      </Routes>
    </Wrapper>
  );
}

export default AdminPage;

const Wrapper = styled.div`
  /* border: 2px solid gray; */
  display: flex;
  width: auto;
  justify-content: center;
  align-items: center;
`;
