import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./pages/mainpage/Mainpage";
import Auth from "./pages/authpage/Auth";
import Termsagreed from "./pages/termspage/TermsAgreed"
import Info from "./pages/infopage/Userinput"
function App() {
  return (
    <Routes >
      <Route exact path="/" element={<Mainpage />} />
      <Route path="/oauth" element={<Auth />} />
      <Route path="/terms" element={<Termsagreed/>}/>
      <Route path="/info" element={<Info/>}/>
    </Routes>
  );
}

export default App;
