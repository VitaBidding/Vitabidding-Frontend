import React, { useState } from "react";
import styled from "styled-components";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Information from "./my.information";

function Info(props) {
  const [key, setKey] = useState("information");
  return (
    <InfoSection>
      <Tabs
        activeKey={key}
        id="fill-tab-example"
        onSelect={(k) => setKey(k)}
        transition={true}
        className="mb-3"
        fill
      >
        <Tab className="tab1" eventKey="information" title="회원 정보">
          <Information />
        </Tab>
        <Tab title="" disabled></Tab>
        <Tab title="" disabled></Tab>
        <Tab title="" disabled></Tab>
        <Tab title="" disabled></Tab>
      </Tabs>
    </InfoSection>
  );
}

export default Info;

const InfoSection = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 70vh;

  .mb-3 {
    font-weight: 800;
  }
  .tab1 {
    display: flex;
    justify-content: center;
  }
`;
