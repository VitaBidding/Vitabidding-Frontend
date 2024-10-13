import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./pages/mainpage/mainpage";
import Auth from "./pages/authpage/auth";
import TermsagreedC from "./pages/termspage/terms.agreed.c";
import TermsagreedInfo from "./pages/termspage/terms.agreed.info";
import Additionalinformation from "./pages/additionalinformationpage/user.input";
import TermsPageC from "./pages/termspage/terms.page.c";
import TermsPageV from "./pages/termspage/terms.page.v";
import Creatorpage from "./pages/creatorpage/index";
import Withdrawalpage from "./pages/authpage/withdrawal.page";
import AuctionPage from "./pages/auctionpage/auctionpage";
import PointAddPage from "./pages/pointaddpage/point.add.page";
import ThirdpartyPage from "./pages/thirdparty/thirdparty.page";
import AdminPage from "./pages/adminpage/admin.page";
import "./assets/bootstrap/bootstrapUnited.min.css";
import "./assets/font/app.css";
function App() {
  return (
    <Routes>
      <Route exact path="/*" element={<Mainpage />} />
      <Route path="/oauth" element={<Auth />} />
      <Route path="/withdrawal" element={<Withdrawalpage />} />
      <Route path="/additionalinformation" element={<TermsagreedInfo />} />
      <Route path="/terms/creator" element={<TermsagreedC />} />
      <Route path="/terms/detail/viewer/*" element={<TermsPageV />} />
      <Route path="/terms/detail/creator/*" element={<TermsPageC />} />
      <Route path="/creator/*" element={<Creatorpage />} />
      <Route path="/auction/:userID" element={<AuctionPage />} />
      <Route path="/pointadd/*" element={<PointAddPage />} />
      <Route path="/thirdparty/*" element={<ThirdpartyPage />} />
      <Route path="/admin/*" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
