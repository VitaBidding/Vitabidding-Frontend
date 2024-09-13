import React from "react";
import styled from "styled-components";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";
function SettlementAccount(AccountInfo) {
  //   console.log("🚀 ~ SettlementAccount ~ AccountInfo:", AccountInfo);
  return (
    <Wrapper>
      {AccountInfo ? (
        <Wrapper1>
          <TextSection3>정산 계좌 정보</TextSection3>
          &nbsp;
          <TextSection4>
            <Label>은행명</Label>
            <Content>케이뱅크</Content>
            &nbsp;
            <Label>계좌번호</Label>
            <Content>1234567891098142</Content>
          </TextSection4>
        </Wrapper1>
      ) : (
        <Wrapper>
          &nbsp;
          <MdAccountBalanceWalletIcon />
          &nbsp;
          <TextSection1>등록된 계좌가 없습니다.</TextSection1>
          <TextSection2>
            계좌를 등록해 주세요 &nbsp; <FaArrowAltCircleRight />
          </TextSection2>
          &nbsp;
        </Wrapper>
      )}
    </Wrapper>
  );
}

export default SettlementAccount;

const Wrapper = styled.div`
  font-family: "GmarketSansMedium";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const MdAccountBalanceWalletIcon = styled(MdAccountBalanceWallet)`
  font-size: 100px;
`;
const TextSection1 = styled.div`
  @media only screen and (max-width: 280px) {
    font-size: 9pt;
  }
  @media only screen and (min-width: 280px) {
    font-size: 9pt;
  }
  @media only screen and (min-width: 360px) {
    font-size: 9pt;
  }
  @media only screen and (min-width: 420px) {
    font-size: 11pt;
  }
  @media only screen and (min-width: 600px) {
    font-size: 14pt;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const TextSection2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 280px) {
    font-size: 9pt;
  }
  @media only screen and (min-width: 280px) {
    font-size: 9pt;
  }
  @media only screen and (min-width: 360px) {
    font-size: 10pt;
  }
  @media only screen and (min-width: 420px) {
    font-size: 12pt;
  }
  @media only screen and (min-width: 600px) {
    font-size: 18pt;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Wrapper1 = styled.div`
  height: 100%;
  width: 100%;
  @media only screen and (max-width: 280px) {
    padding: 20px 10px;
  }
  @media only screen and (min-width: 280px) {
    padding: 20px 10px;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    padding: 20px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const TextSection3 = styled.div`
  color: gray;
  font-weight: bold;

  @media only screen and (max-width: 280px) {
    font-size: 9pt;
  }
  @media only screen and (min-width: 280px) {
    font-size: 9pt;
  }
  @media only screen and (min-width: 360px) {
    font-size: 10pt;
  }
  @media only screen and (min-width: 420px) {
    font-size: 12pt;
  }
  @media only screen and (min-width: 600px) {
    font-size: 12pt;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const TextSection4 = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 280px) {
    font-size: 10pt;
  }
  @media only screen and (min-width: 280px) {
    font-size: 10pt;
  }
  @media only screen and (min-width: 360px) {
    font-size: 11pt;
  }
  @media only screen and (min-width: 420px) {
    font-size: 13pt;
  }
  @media only screen and (min-width: 600px) {
    font-size: 13pt;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const Label = styled.div`
  font-weight: bold;
  color: #000;
`;

const Content = styled.div`
  margin: 0 5px;
`;
