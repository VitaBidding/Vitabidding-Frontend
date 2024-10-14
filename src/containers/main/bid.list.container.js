import React, { useState } from "react";
import styled from "styled-components";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import WaitingForpayment from "../../components/main/bidlist/waiting.for.payment";
import Completepayment from "../../components/main/bidlist/complete.payment";
import Transactioncompleted from "../../components/main/bidlist/transaction.completed";
function BidlistContainer(props) {
  const [key, setKey] = useState("Waiting for payment");
  return (
    <InfoSection>
      <Tabs
        activeKey={key}
        id="fill-tab-example"
        onSelect={(k) => setKey(k)}
        className="mb-3"
        fill
      >
        <Tab className="tab" eventKey="Waiting for payment" title="결제대기">
          <WaitingForpayment />
        </Tab>
        <Tab className="tab" eventKey="Complete payment" title="결제완료">
          <Completepayment />
        </Tab>
        <Tab className="tab" eventKey="Transaction completed" title="거래완료">
          <Transactioncompleted />
        </Tab>
        <Tab title="" disabled></Tab>
      </Tabs>
    </InfoSection>
  );
}

export default BidlistContainer;

const InfoSection = styled.div`
  /* border: 1px solid red; */
  width: 100%;

  .mb-3 {
    font-weight: 800;
    @media only screen and (max-width: 310px) {
      font-size: 10px;
    }
    @media only screen and (min-width: 310px) {
      font-size: small;
    }
    @media only screen and (min-width: 360px) {
      font-size: small;
    }
    @media only screen and (min-width: 420px) {
    }
    @media only screen and (min-width: 600px) {
      font-size: medium;
    }
    @media only screen and (min-width: 768px) {
    }
    @media only screen and (min-width: 992px) {
    }
    @media only screen and (min-width: 1200px) {
    }
  }
`;
