import React from "react";
import "./assets/bootstrap/bootstrapUnited.min.css";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./pages/mainpage/mainpage";
import Auth from "./pages/authpage/auth";
import TermsagreedC from "./pages/termspage/terms.agreed.c";
import TermsagreedV from "./pages/termspage/terms.agreed.v";
import Info from "./pages/infopage/user.input";
import TermsPageC from "./pages/termspage/terms.page.c";
import TermsPageV from "./pages/termspage/terms.page.v";
import Creatorpage from "./pages/creatorpage/index";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Mainpage />} />
      <Route path="/oauth" element={<Auth />} />
      <Route path="/terms/viewer" element={<TermsagreedV />} />
      <Route path="/terms/creator" element={<TermsagreedC />} />
      <Route path="/terms/detail/viewer/*" element={<TermsPageV />} />
      <Route path="/terms/detail/creator/*" element={<TermsPageC />} />
      <Route path="/info" element={<Info />} />
      <Route path="/creator/*" element={<Creatorpage />} />
    </Routes>
  );
}

export default App;
