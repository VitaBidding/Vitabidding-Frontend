import React, { useState } from "react";
import styled from "styled-components";
import { MdAccountBalanceWallet } from "react-icons/md";
import { Button } from "react-bootstrap";
import AccountModal from "./account.modal";
function NonAccount() {
  const [modalShow, setmodalShow] = useState(false);
  const handlemodalClose = () => setmodalShow(false);
  const handlemodalShow = () => setmodalShow(true);
  return (
    <Wrapper>
      <AccountModal show={modalShow} handleClose={handlemodalClose} />
      &nbsp;
      <MdAccountBalanceWalletIcon />
      &nbsp;
      <TextSection1>등록된 계좌가 없습니다.</TextSection1>
      <TextSection2>계좌를 등록해 주세요.</TextSection2>
      &nbsp;
      <AccoutButton onClick={handlemodalShow}>계좌 등록</AccoutButton>
    </Wrapper>
  );
}

export default NonAccount;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MdAccountBalanceWalletIcon = styled(MdAccountBalanceWallet)`
  font-size: 100px;
`;
const TextSection1 = styled.div`
  @media only screen and (max-width: 280px) {
    font-size: 11pt;
  }
  @media only screen and (min-width: 280px) {
    font-size: 11pt;
  }
  @media only screen and (min-width: 360px) {
    font-size: 16pt;
  }
  @media only screen and (min-width: 420px) {
    font-size: 24pt;
  }
`;
const TextSection2 = styled.div`
  @media only screen and (max-width: 280px) {
    font-size: 9pt;
  }
  @media only screen and (min-width: 280px) {
    font-size: 9pt;
  }
  @media only screen and (min-width: 360px) {
    font-size: 14pt;
  }
  @media only screen and (min-width: 420px) {
    font-size: 20pt;
  }
`;

const AccoutButton = styled(Button)``;
