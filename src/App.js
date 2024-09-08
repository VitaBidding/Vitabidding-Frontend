import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./pages/mainpage/mainpage";
import Auth from "./pages/authpage/auth";
import Termsagreed from "./pages/termspage/terms.agreed"
import Info from "./pages/infopage/user.input"
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
