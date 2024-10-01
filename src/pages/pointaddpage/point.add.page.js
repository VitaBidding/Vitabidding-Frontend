import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import PointAddContainer from "../../containers/pointadd/point.add.container";
import AcconttransferContainer from "../../containers/thirdparty/accont.transfer.container";
function PointAddPage() {
  return (
    <Wrapper>
      <Routes>
        <Route exact path="/" element={<PointAddContainer />} />
        <Route path="/acconttransfer" element={<AcconttransferContainer />} />
      </Routes>
    </Wrapper>
  );
}

export default PointAddPage;

const Wrapper = styled.div``;
