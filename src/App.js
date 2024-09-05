import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./pages/mainpage/Mainpage";
import ViewerAuth from "./pages/authpage/ViewerAuth";
import CreatorAuth from "./pages/authpage/CreatorAuth";
function App() {
  return (
    <Routes >
      <Route exact path="/" element={<Mainpage />} />
      <Route path="/oauth/creator" element={<CreatorAuth />} />
      <Route path="/oauth/viewer" element={<ViewerAuth />} />
    </Routes>
  );
}

export default App;
